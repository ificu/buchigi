import { Button } from "@/components/ds";
import { ChevronLeft, Ellipsis, Images, Mic, PhoneOff, Sparkles, Volume2 } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { IPhone, StatusBar } from "@/components/ui/iphone";
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
        <div className="hero-stage" style={{ background: "radial-gradient(120% 70% at 50% 100%, rgba(198,124,78,.55), transparent 70%), var(--gradient-dark)", borderRadius: 21, padding: "48px 24px", display: "flex", justifyContent: "center" }}>
          <CallPhone />
        </div>
      </GlowCard>
    </section>
  );
}

const WAVE = [10, 18, 26, 14, 22, 12, 24, 16, 8, 20, 26, 12, 18, 10, 22, 14];

function CallPhone() {
  return (
    <IPhone>
      {/* Dark call header: status bar, nav row and the AI companion currently speaking */}
      <div style={{ flex: "none", background: "var(--gradient-dark)", color: "#fff", paddingBottom: 30 }}>
        <StatusBar />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 16px 0" }}>
          <span className="app-icon-btn"><ChevronLeft size={20} strokeWidth={2} /></span>
          <div style={{ textAlign: "center", lineHeight: 1.3 }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>추억 대화</div>
            <div style={{ fontSize: 11, color: "var(--color-inverse-ink-soft)", display: "inline-flex", alignItems: "center", gap: 5 }}>
              <span className="live-dot" />통화 중 · <span style={{ fontFamily: "Sora", fontVariantNumeric: "tabular-nums" }}>03:12</span>
            </div>
          </div>
          <span className="app-icon-btn"><Ellipsis size={20} strokeWidth={2} /></span>
        </div>
        <div style={{ margin: "16px 16px 0", padding: "10px 14px 10px 10px", borderRadius: 16, background: "rgba(255,255,255,.06)", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ position: "relative", width: 44, height: 44, flex: "none" }}>
            <span className="ring" />
            <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "linear-gradient(140deg, #e0a37a, var(--color-coffee) 55%, #8a5232)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Sparkles size={20} strokeWidth={2} />
            </span>
          </span>
          <div style={{ flex: 1, minWidth: 0, lineHeight: 1.35, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>AI 말동무</div>
            <div style={{ fontSize: 11, color: "var(--color-inverse-ink-soft)" }}>이야기하는 중…</div>
          </div>
          <div className="wave" aria-hidden="true">
            {WAVE.map((h, i) => <i key={i} style={{ height: h, animationDelay: `${(i % 6) * 0.12}s` }} />)}
          </div>
        </div>
      </div>

      {/* Conversation sheet overlapping the header */}
      <div style={{ flex: 1, minHeight: 0, overflow: "hidden", marginTop: -18, borderRadius: "22px 22px 0 0", background: "var(--surface-page)", padding: "14px 14px 10px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ alignSelf: "center", fontSize: 10.5, color: "var(--text-muted)", background: "#efefef", borderRadius: 999, padding: "3px 10px" }}>오늘 오전 10:02</div>
        {/* The photo gives up height first so the call controls below always stay inside the screen. */}
        <div style={{ display: "flex", gap: 8, flex: "1 1 auto", minHeight: 0 }}>
          <span style={{ width: 26, height: 26, flex: "none", borderRadius: "50%", background: "linear-gradient(140deg, #e0a37a, var(--color-coffee))", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}><Sparkles size={13} strokeWidth={2.2} /></span>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0, flex: 1 }}>
            <div style={{ flex: "1 1 auto", minHeight: 0, overflow: "hidden", background: "#fff", borderRadius: 16, padding: 5, boxShadow: "0 2px 10px rgba(31,32,40,.06)", display: "flex", flexDirection: "column" }}>
              <div role="img" aria-label="2019년 여름, 제주도 가족 여행 사진" style={{ flex: "1 1 auto", minHeight: 0, maxHeight: 150, borderRadius: 12, background: `var(--color-block-mint) url(${import.meta.env.BASE_URL}assets/jeju.jpg) center/cover` }} />
              <div style={{ flex: "none", display: "flex", alignItems: "center", gap: 5, padding: "6px 5px 2px", whiteSpace: "nowrap", fontSize: 11, fontWeight: 600, color: "var(--color-roast)" }}>
                <Images size={12} strokeWidth={2.2} color="var(--color-coffee)" />2019년 여름, 제주도 가족 여행
              </div>
            </div>
            <div style={{ flex: "none", display: "flex", alignItems: "flex-end", gap: 6 }}>
              <div className="app-msg">어머니, 손주가 처음 바다에 들어갔던 날 기억나세요?</div>
              <span className="app-time">10:02</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6, alignSelf: "flex-end", flex: "none" }}>
          <span className="app-time" style={{ textAlign: "right", lineHeight: 1.3 }}>음성<br />10:03</span>
          <div className="app-msg app-msg-me">그럼, 파도 보고 엉엉 울었지</div>
        </div>
        <div className="typing-row" style={{ display: "flex", gap: 8, flex: "none" }}>
          <span style={{ width: 26, flex: "none" }} />
          <span className="typing" aria-label="AI 말동무가 답하는 중"><i /><i /><i /></span>
        </div>
      </div>

      {/* Call controls */}
      <div style={{ flex: "none", background: "#fff", borderTop: "1px solid var(--color-hairline-soft)", padding: "12px 28px 26px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div className="app-ctrl">
          <button type="button" aria-label="스피커" style={{ width: 46, height: 46, background: "var(--color-surface-soft)", color: "var(--color-ink)" }}><Volume2 size={20} /></button>스피커
        </div>
        <div className="app-ctrl">
          <button type="button" aria-label="말하기" style={{ width: 60, height: 60, background: "var(--color-coffee)", color: "#fff", boxShadow: "0 8px 20px rgba(198,124,78,.45)" }}><Mic size={24} /></button>말하기
        </div>
        <div className="app-ctrl">
          <button type="button" aria-label="끊기" style={{ width: 46, height: 46, background: "var(--color-promo)", color: "#fff" }}><PhoneOff size={20} /></button>끊기
        </div>
      </div>
    </IPhone>
  );
}
