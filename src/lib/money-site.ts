export const MONEY_SITE_URL = "https://zb368.biz/camp-fb1";

export function moneySiteUrlWithIncomingQuery(): string {
  const target = new URL(MONEY_SITE_URL);
  if (typeof window !== "undefined") {
    const incoming = new URLSearchParams(window.location.search);
    incoming.forEach((value, key) => {
      if (!target.searchParams.has(key)) target.searchParams.set(key, value);
    });
  }
  return target.toString();
}

/** Navigate via a real anchor so crawlers see rel="nofollow". */
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
