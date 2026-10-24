import { Checkmark, ColorBlock } from "@/components/ds";
import { GlowCard } from "@/components/ui/spotlight-card";

const FEATURES = [
  ["추억 되새김 음성 대화", "오늘 부모님의 일상에 대해 짧은 질문 4~5개를 건네요.", "주 2~3회 · 회당 5분 내외"],
  ["가족 기념일·행사 알림", "생신, 결혼기념일, 가족 모임을 미리 알려드려요.", "카카오톡 알림"],
  ["‘1년 전 오늘’ 추억 영상", "가족이 올린 사진과 영상으로 어르신 맞춤 짧은 영상을 보내드려요.", "카카오톡으로 받아보기"],
];

const PROMISES = [
  ["검사가 아닌 대화", "문제 풀이 대신 자연스러운 일상 이야기"],
  ["목소리로 간편하게", "버튼·글자 입력 없이 전화로"],
  ["진단하지 않아요", "변화를 기록하고, 필요하면 전문 상담 안내"],
  ["가족이 함께", "형제자매가 기록을 같이 확인"],
];

export function Intro() {
  return (
    <section className="wrap sec" id="intro">
      <ColorBlock color="lime" eyebrow="서비스 소개" title="부모님에게 새로 생긴 AI 친구" body="가족관계·생일·사진만 등록하면 준비 끝">
        <div className="g3">
          {FEATURES.map(([t, b, m], i) => (
            <GlowCard key={t} customSize glowColor="coffee" backdrop="#fff" radius={20} className="flex flex-col gap-[14px] rounded-[20px] p-6 shadow-none backdrop-blur-none">
              <span style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--color-coffee-soft)", color: "var(--color-coffee)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 16 }}>0{i + 1}</span>
              <h3 className="t-headline">{t}</h3>
              <p className="read">{b}</p>
              <div className="t-body-sm" style={{ marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--color-hairline-soft)", fontWeight: 600, color: "var(--color-coffee-strong)" }}>{m}</div>
            </GlowCard>
          ))}
        </div>
      </ColorBlock>
      <div className="g3" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: "var(--space-md)" }}>
        {PROMISES.map(([t, b]) => (
          <div key={t} className="tile" style={{ padding: "var(--space-lg)", display: "flex", gap: 12, background: "var(--surface-card)", boxShadow: "var(--elevation-1)" }}>
            <Checkmark size={22} style={{ marginTop: 4 }} />
            <div><div className="t-link">{t}</div><div className="t-body-sm" style={{ color: "var(--text-muted)" }}>{b}</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
