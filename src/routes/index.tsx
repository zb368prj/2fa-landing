import { createFileRoute } from "@tanstack/react-router";
import { VerifyGate } from "@/components/verify-gate";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <VerifyGate />;
}
