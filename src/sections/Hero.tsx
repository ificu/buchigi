import { Button } from "@/components/ds";
import { GlowCard } from "@/components/ui/spotlight-card";
import { scrollToId } from "@/lib/scroll";

export function Hero() {
  return (
    <section className="wrap hero" style={{ paddingTop: 96, display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: 48, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div className="t-eyebrow">우리 엄마 기억 저장소</div>
        <h1 className="t-display-xl" style={{ margin: 0 }}>부모님의 새로운 <span className="t-accent">말동무</span></h1>
        <p className="read" style={{ fontSize: 22, margin: 0, color: "var(--color-roast)" }}>가족 사진과 이야기로 AI가 부모님과 즐겁게 대화해요. 검사처럼 느껴지지 않게, 자녀는 기억의 작은 변화를 더 일찍 알아챌 수 있어요.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button onClick={() => scrollToId("pricing")}>2주 무료로 시작하기</Button>
          <Button variant="outline" onClick={() => scrollToId("demo")}>앱 미리보기</Button>
        </div>
      </div>
      <GlowCard customSize glowColor="coffee" backdrop="transparent" radius={24} className="block rounded-[24px] p-0 shadow-none backdrop-blur-none">
        <div style={{ background: "radial-gradient(120% 70% at 50% 100%, rgba(198,124,78,.55), transparent 70%), var(--gradient-dark)", borderRadius: 21, padding: "40px 24px", display: "flex", justifyContent: "center" }}>
          <CallPhone />
        </div>
      </GlowCard>
    </section>
  );
}

function CallPhone() {
  // Dark screen fill so the light base can't bleed through the anti-aliased top corners under the dark header.
  return (
    <div className="phone"><div className="screen" style={{ background: "var(--color-espresso)" }}>
      <div style={{ background: "var(--gradient-dark)", color: "#fff", padding: "34px 24px 24px", textAlign: "center" }}>
        <div className="t-body-sm" style={{ color: "var(--color-inverse-ink-soft)", display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-promo)" }} />추억 대화 · 03:12
        </div>
        <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.4px" }}>우리 가족 이야기</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, padding: 20, display: "flex", flexDirection: "column", gap: 14, background: "var(--surface-page)" }}>
        {/* The photo gives up height first so the call buttons below always stay inside the screen. */}
        <div className="ph" style={{ aspectRatio: "4/3", flexShrink: 1, minHeight: 0, background: `var(--color-block-mint) url(${import.meta.env.BASE_URL}assets/jeju.jpg) center/cover`, padding: 12 }}>
          <span className="t-body-sm" style={{ fontWeight: 600, background: "var(--gradient-dark)", color: "#fff", borderRadius: "var(--radius-sm)", padding: "4px 10px" }}>2019년 여름, 제주도 가족 여행</span>
        </div>
        <div className="bubble">어머니, 손주가 처음 바다에 들어갔던 날 기억나세요?</div>
        <div className="bubble bubble-me">그럼, 파도 보고 엉엉 울었지</div>
      </div>
      <div style={{ display: "flex", gap: 12, padding: "18px 20px 40px", background: "#fff" }}>
        <Button variant="outline" fullWidth>끊기</Button>
        <Button fullWidth>말하기</Button>
      </div>
    </div></div>
  );
}
