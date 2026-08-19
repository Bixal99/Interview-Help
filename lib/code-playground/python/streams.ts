export function normalizeStreamText(value: string) {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trimEnd();
}

export function createStdoutWriteHandler(stdoutRef: { value: string }) {
  const decoder = new TextDecoder();
  return (buffer: Uint8Array) => {
    stdoutRef.value += decoder.decode(buffer, { stream: true });
    return buffer.byteLength;
  };
}

export function createStderrWriteHandler(stderrRef: { value: string }) {
  return createStdoutWriteHandler(stderrRef);
}

export function createStdinHandler(input: string, stdoutRef?: { value: string }) {
  const lines = input.replace(/\r\n/g, "\n").replace(/\r/g, "\n").split("\n");
  let index = 0;
  return () => {
    if (index >= lines.length) return undefined;
    const line = lines[index];
    index += 1;
    if (stdoutRef) stdoutRef.value += `${line}\n`;
    return `${line}\n`;
  };
}
