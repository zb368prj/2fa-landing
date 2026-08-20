const KEY = "hoivien-verified";

export function isMemberVerified(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(KEY) === "1";
}

export function setMemberVerified(value: boolean) {
  if (typeof window === "undefined") return;
  if (value) sessionStorage.setItem(KEY, "1");
  else sessionStorage.removeItem(KEY);
}
