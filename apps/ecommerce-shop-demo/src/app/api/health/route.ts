import { connection } from "next/server";

// Liveness and readiness for Docker's HEALTHCHECK and the Kubernetes probes. It answers
// without touching any dependency, so one slow service can't restart every pod.
export async function GET() {
  await connection();
  return Response.json({ status: "ok" }, { headers: { "Cache-Control": "no-store" } });
}
