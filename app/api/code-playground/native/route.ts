import { executeNativeCode } from "@/lib/code-playground/native-execution";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type NativePlaygroundRequest = {
  language?: "c" | "cpp";
  code?: string;
  input?: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json() as NativePlaygroundRequest;
    if (!body || (body.language !== "c" && body.language !== "cpp") || typeof body.code !== "string") {
      return Response.json({ message: "Invalid playground request." }, { status: 400 });
    }

    const result = await executeNativeCode(body.language, body.code, typeof body.input === "string" ? body.input : "");
    return Response.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return Response.json(
      {
        ok: false,
        stdout: "",
        stderr: message || "Native runner failed.",
        errorType: "RUNTIME_ERROR",
      },
      { status: 500 },
    );
  }
}
