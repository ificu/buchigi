export const NAV: Record<string, string> = {
  "서비스 소개": "intro",
  "앱 미리보기": "demo",
  "이용 후기": "reviews",
  "요금제": "pricing",
  "자주 묻는 질문": "faq",
};

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
}
