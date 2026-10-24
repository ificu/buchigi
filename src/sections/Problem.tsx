import { GlowCard } from "@/components/ui/spotlight-card";

const STATS: [num: string, unit: string, text: string, width: number, color: string][] = [
  ["17", "/ 19명", "부모님의 인지 건강을 걱정해 본 적이 있어요.", 89, "pink"],
  ["9", "/ 17명", "따로 사는 자녀의 절반 이상이 연락은 주 1~2회 이하예요.", 53, "lilac"],
  ["88", "%", "어르신 가구는 혼자 또는 부부끼리만 지내세요.", 88, "coral"],
];

export function Problem() {
  return (
    <section className="wrap sec">
      <div className="head">
        <div className="t-eyebrow">왜 필요할까요</div>
        <h2 className="t-display-lg">물어보고 싶지만, 묻기 어려운 질문</h2>
        <p className="t-subhead" style={{ color: "var(--color-roast)" }}>"부모님의 기억 변화를 알아차리기 너무 어려워요."</p>
      </div>
      <div className="g3">
        {STATS.map(([n, u, t, w, c]) => (
          <GlowCard key={n} customSize glowColor="coffee" backdrop="var(--surface-card)" radius={20}
            className="flex flex-col gap-[18px] rounded-[20px] p-8 shadow-[var(--elevation-1)] backdrop-blur-none">
            <div className="num" style={{ color: "var(--color-coffee)" }}>{n}<span className="t-subhead" style={{ marginLeft: 6, color: "var(--text-muted)" }}>{u}</span></div>
            <p className="read">{t}</p>
            <div className="bar"><span style={{ width: w + "%", background: `var(--color-block-${c})` }}></span></div>
          </GlowCard>
        ))}
      </div>
      <p className="t-body-sm" style={{ marginTop: 16, color: "var(--text-muted)" }}>출처: 자체 자녀 인터뷰 20명, 보건복지부 「2023 노인실태조사」</p>
    </section>
  );
}
