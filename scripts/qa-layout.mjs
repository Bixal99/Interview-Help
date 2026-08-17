const endpoint = process.env.QA_CDP_ENDPOINT ?? "http://localhost:9223";
const url = process.argv[2] ?? "http://localhost:3000";
const width = Number(process.argv[3] ?? 390);
const height = Number(process.argv[4] ?? 844);
const screenshotPath = process.argv[5];
const targets = await fetch(`${endpoint}/json/list`).then((response) => response.json());
const target = targets.find((item) => item.type === "page");
if (!target) throw new Error("No headless Chrome page target found");

const socket = new WebSocket(target.webSocketDebuggerUrl);
let sequence = 0;
const pending = new Map();
socket.addEventListener("message", ({ data }) => {
  const message = JSON.parse(data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    message.error ? reject(new Error(message.error.message)) : resolve(message.result);
  }
});
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++sequence;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});
await send("Page.enable");
await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: 1, mobile: width < 768 });
await send("Page.navigate", { url });
await new Promise((resolve) => setTimeout(resolve, 2500));
const expression = `({
  innerWidth,
  scrollWidth: document.documentElement.scrollWidth,
  bodyWidth: document.body.scrollWidth,
  offenders: [...document.querySelectorAll('*')]
    .filter(e => e.getBoundingClientRect().right > innerWidth + 1 || e.getBoundingClientRect().left < -1)
    .slice(0, 30)
    .map(e => ({ tag: e.tagName, class: String(e.className).slice(0, 100), left: Math.round(e.getBoundingClientRect().left), right: Math.round(e.getBoundingClientRect().right), width: Math.round(e.getBoundingClientRect().width), text: e.textContent?.trim().slice(0, 50) }))
})`;
const result = await send("Runtime.evaluate", { expression, returnByValue: true });
console.log(JSON.stringify(result.result.value, null, 2));
if (screenshotPath) {
  const { data } = await send("Page.captureScreenshot", { format: "png", fromSurface: true, captureBeyondViewport: false });
  const { writeFileSync } = await import("node:fs");
  writeFileSync(screenshotPath, Buffer.from(data, "base64"));
}
socket.close();
