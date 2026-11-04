/**
 * Auth.js route handler — handles all /api/auth/* requests.
 * This runs in Node.js runtime only; it should never be imported from proxy.ts.
 */
import { handlers } from "@/auth";

export const { GET, POST } = handlers;

