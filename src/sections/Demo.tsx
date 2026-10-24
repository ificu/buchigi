import { useState, type ReactNode } from "react";
import { Button, PillTabs } from "@/components/ds";
import { GlowCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

// Grey preview tile (.tile) with the spotlight glow border.
function Tile({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <GlowCard customSize glowColor="blue" backdrop="var(--surface-tile)" radius={24}
      className={cn("block rounded-[24px] p-8 shadow-none backdrop-blur-none max-[560px]:p-5", className)}>
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
const DAYS: [day: string, color?: string][] = [["25"], ["26"], ["27", "mint"], ["28"], ["29", "mint"], ["30", "lime"], ["31"]];
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
        <p className="t-body-sm">어머니 · 김순자 님 · 2026년 10월</p>
        <div className="num" style={{ marginTop: 24 }}>11<span className="t-subhead" style={{ marginLeft: 8 }}>번 대화했어요</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
          {ROWS.map(([l, w, c, t]) => (
            <div key={l} style={{ display: "grid", gridTemplateColumns: "minmax(84px,150px) minmax(0,1fr)", gap: 12, alignItems: "center" }}>
              <span className="read" style={{ fontSize: 19 }}>{l}</span>
              <div className="bar"><span style={{ width: w + "%", background: `var(--color-block-${c})` }}><i>{t}</i></span></div>
            </div>
          ))}
        </div>
        <p className="t-body-sm" style={{ marginTop: 20 }}>진단이 아닌 대화 기록이에요. 걱정되는 변화가 이어지면 전문 상담을 연결해 드려요.</p>
      </Tile>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
        <Tile>
          <h3 className="t-headline">최근 대화</h3>
          {RECENT.map(([t, s, c]) => (
            <div key={t} style={{ background: "#fff", borderRadius: "var(--radius-md)", padding: "16px 20px", marginTop: 12, display: "flex", gap: 14 }}>
              <span style={{ ...dot(c), boxShadow: "inset 0 0 0 1px rgba(0,0,0,.2)", flex: "none", marginTop: 8 }}></span>
              <div><div className="t-link">{t}</div><div className="t-body-sm">{s}</div></div>
            </div>
          ))}
        </Tile>
        <Tile>
          <h3 className="t-headline">10월 가족 달력</h3>
          <div className="cal">
            {["일", "월", "화", "수", "목", "금", "토"].map((d) => <span key={d} className="t-body-sm">{d}</span>)}
            {DAYS.map(([d, c]) => <b key={d} style={{ background: c ? `var(--color-block-${c})` : "transparent", fontWeight: c ? 540 : 400 }}>{d}</b>)}
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }} className="t-body-sm">
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i style={dot("mint")}></i>추억 대화</span>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><i style={dot("lime")}></i>아버지 생신</span>
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
      <GlowCard customSize glowColor="orange" backdrop="var(--color-block-cream)" radius={32}
        className="flex justify-center rounded-[32px] px-6 py-8 shadow-none backdrop-blur-none" style={{ flex: "0 1 420px" }}>
        <div className="phone"><div className="screen">
          <div style={{ padding: "34px 24px 20px", textAlign: "center", background: "var(--color-surface-soft)" }}>
            <div className="t-body-sm">카카오톡 · 오늘 오전 10:00</div>
            <div style={{ fontSize: 28, fontWeight: 540 }}>1년 전 오늘</div>
          </div>
          <div style={{ flex: 1, minHeight: 0, padding: 20, display: "flex", flexDirection: "column", gap: 14, background: "var(--color-surface-soft)" }}>
            {/* The square photo shrinks to fit so the 영상 보기 button always stays inside the screen. */}
            <div className="ph" style={{ flex: 1, minHeight: 0, background: "var(--color-block-pink)", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-start", gap: 10 }}>
              <img src="/assets/chuseok.jpg" alt="작년 추석, 가족이 함께 송편을 빚는 모습" style={{ flex: "1 1 auto", minHeight: 0, aspectRatio: "1 / 1", maxWidth: "100%", objectFit: "cover", alignSelf: "center", borderRadius: 6 }} />
              <span className="t-body-sm" style={{ fontWeight: 480 }}>작년 추석, 온 가족 영상 (영상 자리)</span>
            </div>
            <div className="bubble">어머니, 1년 전 오늘 추석 영상이 도착했어요.</div>
          </div>
          <div style={{ padding: "18px 20px 40px" }}><Button fullWidth>영상 보기</Button></div>
        </div></div>
      </GlowCard>
      <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
        {STEPS.map(([t, b], i) => (
          <Tile key={t} className="flex gap-[18px] p-6">
            <span style={{ width: 48, height: 48, flex: "none", borderRadius: "50%", background: "#000", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 540, fontSize: 20 }}>{i + 1}</span>
            <div><div className="t-headline">{t}</div><p className="read">{b}</p></div>
          </Tile>
        ))}
      </div>
    </div>
  );
}
