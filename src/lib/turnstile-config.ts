export const TURNSTILE_SITE_KEY =
  (import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined) ?? "";

export const TURNSTILE_ACTION =
  (import.meta.env.VITE_TURNSTILE_ACTION as string | undefined) ?? "verify";
