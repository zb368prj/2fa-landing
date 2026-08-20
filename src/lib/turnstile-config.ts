export const TURNSTILE_SITE_KEY =
  (import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined) ??
  "0x4AAAAAAEW8EWFSECRqSUPK";

export const TURNSTILE_ACTION = "verify-member";
