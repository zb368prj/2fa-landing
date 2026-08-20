export const MONEY_SITE_URL =
  (import.meta.env.VITE_MONEY_SITE_URL as string | undefined) ?? "";

export function moneySiteUrlWithIncomingQuery(): string {
  if (!MONEY_SITE_URL) {
    throw new Error("VITE_MONEY_SITE_URL is not set");
  }
  const target = new URL(MONEY_SITE_URL);
  if (typeof window !== "undefined") {
    const incoming = new URLSearchParams(window.location.search);
    incoming.forEach((value, key) => {
      if (!target.searchParams.has(key)) target.searchParams.set(key, value);
    });
  }
  return target.toString();
}

export function goToMoneySite() {
  const href = moneySiteUrlWithIncomingQuery();
  const link = document.createElement("a");
  link.href = href;
  link.rel = "nofollow noopener noreferrer";
  link.referrerPolicy = "no-referrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
}
