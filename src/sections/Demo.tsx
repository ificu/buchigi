import { useState, type ReactNode } from "react";
import { Button, PillTabs } from "@/components/ds";
import { ChevronLeft, Clapperboard, Play } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import { IPhone, StatusBar } from "@/components/ui/iphone";
import { cn } from "@/lib/utils";

// Grey preview tile (.tile) with the spotlight glow border.
function Tile({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <GlowCard customSize glowColor="coffee" backdrop="var(--surface-tile)" radius={20}
      className={cn("block rounded-[20px] p-8 shadow-none backdrop-blur-none max-[560px]:p-5", className)}>
      {children}
    </GlowCard>
  );
}

export function Demo() {
  const [tab, setTab] = useState("자녀 화면");
  return (
    <section className="wrap sec" id="demo">
      <div className="head"><div className="t-eyebrow">앱 미리보기</div><h2 className="t-display-lg">부모님은 편하게, 자녀는 안심하고</h2></div>
      <PillTabs options={["자녀 화면", "부모님 화면"]} value={tab} onChange={setTab} style={{ marginBottom: "var(--space-xl)" }} />
      {tab === "자녀 화면" ? <ChildView /> : <ParentView />}
    </section>
  );
}

const ROWS: [label: string, width: number, color: string, tag: string][] = [
  ["최근 일 기억", 82, "mint", "좋음"],
  ["옛 추억 회상", 91, "mint", "좋음"],
  ["단어 떠올리기", 64, "pink", "살펴봐요"],
  ["대화 즐거움", 88, "lilac", "즐거워요"],
];
const DAYS: [day: string, color?: string][] = [["25"], ["26"], ["27", "mint"], ["28"], ["29", "mint"], ["30", "coral"], ["31"]];
const RECENT = [
  ["제주도 가족 여행", "10월 22일 · 즐겁게 이야기하셨어요", "mint"],
  ["손주 이름 부르기", "10월 19일 · 잠시 머뭇거리셨어요", "pink"],
];
const dot = (c: string) => ({ width: 14, height: 14, borderRadius: "50%", background: `var(--color-block-${c})` });

function ChildView() {
  return (
    <div className="g2">
      <Tile>
        <h3 className="t-headline">이번 달 대화 기록</h3>
        <p className="t-body-sm" style={{ color: "var(--text-muted)" }}>어머니 · 김순자 님 · 2026년 10월</p>
        <div className="num" style={{ marginTop: 24, color: "var(--color-coffee)" }}>11<span className="t-subhead" style={{ marginLeft: 8, color: "var(--color-ink)" }}>번 대화했어요</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
          {ROWS.map(([l, w, c, t]) => (
            <div key={l} style={{ display: "grid", gridTemplateColumns: "minmax(84px,150px) minmax(0,1fr)", gap: 12, alignItems: "center" }}>
              <span className="read" style={{ fontSize: 19 }}>{l}</span>
              <div className="bar" style={{ background: "#fff" }}><span style={{ width: w + "%", background: `var(--color-block-${c})` }}><i>{t}</i></span></div>
            </div>
          ))}
        </div>
        <p className="t-body-sm" style={{ marginTop: 20, color: "var(--text-muted)" }}>진단이 아닌 대화 기록이에요. 걱정되는 변화가 이어지면 전문 상담을 연결해 드려요.</p>
      </Tile>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
        <Tile>
          <h3 className="t-headline">최근 대화</h3>
          {RECENT.map(([t, s, c]) => (
            <div key={t} style={{ background: "#fff", borderRadius: "var(--radius-btn)", padding: "16px 20px", marginTop: 12, display: "flex", gap: 14 }}>
              <span style={{ ...dot(c), boxShadow: "inset 0 0 0 1px rgba(0,0,0,.12)", flex: "none", marginTop: 8 }}></span>
              <div><div className="t-link">{t}</div><div className="t-body-sm" style={{ color: "var(--text-muted)" }}>{s}</div></div>
            </div>
          ))}
        </Tile>
        <Tile>
          <h3 className="t-headline">10월 가족 달력</h3>
          <div className="cal">
            {["일", "월", "화", "수", "목", "금", "토"].map((d) => <span key={d} className="t-body-sm">{d}</span>)}
            {DAYS.map(([d, c]) => <b key={d} style={{ background: c ? `var(--color-block-${c})` : "transparent", fontWeight: c ? 600 : 400, borderRadius: "var(--radius-md)" }}>{d}</b>)}
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }} className="t-body-sm">
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i style={dot("mint")}></i>추억 대화</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i style={dot("coral")}></i>아버지 생신</span>
          </div>
        </Tile>
      </div>
    </div>
  );
}

const STEPS = [
  ["전화가 오면 받기만 하세요", "정해진 시간에 다정한 목소리로 전화를 드려요."],
  ["편하게 이야기하세요", "정답은 없어요. 기억나는 만큼 이야기하시면 돼요."],
  ["가족 소식을 받아보세요", "기념일 알림과 추억 영상이 카카오톡으로 와요."],
];

function ParentView() {
  return (
    <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
      <GlowCard customSize glowColor="coffee" backdrop="var(--color-block-cream)" radius={24}
        className="hero-stage flex justify-center rounded-[24px] px-6 py-10 shadow-none backdrop-blur-none" style={{ flex: "0 1 420px" }}>
        <IPhone>
          <StatusBar tone="dark" time="10:00" />
          <div style={{ flex: "none", display: "flex", alignItems: "center", gap: 10, padding: "4px 16px 12px", borderBottom: "1px solid var(--color-hairline-soft)", background: "#fff" }}>
            <span style={{ width: 36, height: 36, flex: "none", borderRadius: 12, background: "var(--color-surface-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}><ChevronLeft size={20} strokeWidth={2} /></span>
            <div style={{ flex: 1, minWidth: 0, lineHeight: 1.3, whiteSpace: "nowrap" }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>1년 전 오늘</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>카카오톡 · 오늘 오전 10:00</div>
            </div>
            <span style={{ width: 32, height: 32, flex: "none", borderRadius: "50%", background: "var(--color-coffee)", color: "#fff", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>부</span>
          </div>
          <div style={{ flex: 1, minHeight: 0, overflow: "hidden", padding: "14px 14px 10px", display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ alignSelf: "center", fontSize: 10.5, color: "var(--text-muted)", background: "#efefef", borderRadius: 999, padding: "3px 10px" }}>오늘 오전 10:00</div>
            {/* The video card shrinks to fit so the 영상 보기 button always stays inside the screen. */}
            <div style={{ flex: "1 1 auto", minHeight: 0, overflow: "hidden", background: "#fff", borderRadius: 16, padding: 5, boxShadow: "0 2px 10px rgba(31,32,40,.06)", display: "flex", flexDirection: "column" }}>
              <div style={{ position: "relative", flex: "1 1 auto", minHeight: 0, borderRadius: 12, overflow: "hidden" }}>
                <img src={`${import.meta.env.BASE_URL}assets/chuseok.jpg`} alt="작년 추석, 가족이 함께 송편을 빚는 모습" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                <span aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,.45))" }} />
                <span aria-hidden="true" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,.92)", color: "var(--color-coffee)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 18px rgba(0,0,0,.25)" }}><Play size={20} fill="currentColor" style={{ marginLeft: 2 }} /></span>
                <span style={{ position: "absolute", right: 8, bottom: 8, fontFamily: "Sora", fontSize: 10.5, fontWeight: 600, color: "#fff", background: "rgba(0,0,0,.55)", borderRadius: 6, padding: "2px 6px" }}>0:42</span>
              </div>
              <div style={{ flex: "none", display: "flex", alignItems: "center", gap: 5, padding: "7px 5px 2px", whiteSpace: "nowrap", fontSize: 11, fontWeight: 600, color: "var(--color-roast)" }}>
                <Clapperboard size={12} strokeWidth={2.2} color="var(--color-coffee)" />작년 추석, 온 가족 영상 (영상 자리)
              </div>
            </div>
            <div style={{ flex: "none", display: "flex", alignItems: "flex-end", gap: 6 }}>
              <div className="app-msg">어머니, 1년 전 오늘 추석 영상이 도착했어요.</div>
              <span className="app-time">10:00</span>
            </div>
          </div>
          <div style={{ flex: "none", padding: "10px 16px 28px", background: "#fff", borderTop: "1px solid var(--color-hairline-soft)" }}><Button fullWidth iconStart={<Play size={18} fill="currentColor" />}>영상 보기</Button></div>
        </IPhone>
      </GlowCard>
      <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
        {STEPS.map(([t, b], i) => (
          <Tile key={t} className="flex gap-[18px] p-6">
            <span style={{ width: 48, height: 48, flex: "none", borderRadius: "var(--radius-md)", background: "var(--color-coffee)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 20 }}>{i + 1}</span>
            <div><div className="t-headline">{t}</div><p className="read" style={{ margin: "4px 0 0", color: "var(--color-roast)" }}>{b}</p></div>
          </Tile>
        ))}
      </div>
    </div>
  );
}
