import { useState } from "react";
import { ColorBlock } from "@/components/ds";
import { GlowCard } from "@/components/ui/spotlight-card";

const QA = [
  ["부모님이 스마트폰을 잘 못 쓰셔도 괜찮나요?", "네. 대화는 일반 전화로 걸려오고, 받기만 하시면 돼요. 영상과 알림은 이미 쓰시는 카카오톡으로 보내드려요."],
  ["치매를 진단해 주는 서비스인가요?", "아니요. 의료 진단을 하지 않아요. 대화에서 보이는 변화를 기록으로 보여드리고, 걱정되는 변화가 이어지면 전문 상담 기관을 안내해 드려요."],
  ["가족 사진과 대화 내용은 안전한가요?", "등록한 가족만 볼 수 있고, 언제든 삭제할 수 있어요. 대화 내용은 요약본으로만 자녀에게 전달돼요."],
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="wrap sec" id="faq">
      <GlowCard customSize glowColor="coffee" backdrop="var(--color-block-lime)" radius={20} className="block rounded-[20px] p-0 shadow-none backdrop-blur-none">
      <ColorBlock color="lime" eyebrow="자주 묻는 질문" title="궁금한 점을 모았어요" style={{ borderRadius: 17 }}>
        <div>
          {QA.map(([q, a], i) => (
            <div key={q} style={{ borderTop: "1px solid rgba(198,124,78,.25)" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="faq-btn"
                style={{ all: "unset", cursor: "pointer", width: "100%", minHeight: 72, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
                <span className="t-headline faq-q">{q}</span><span className="faq-sign" aria-hidden="true" style={{ fontWeight: 400 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="read faq-a" style={{ margin: 0, paddingBottom: 24, maxWidth: 820, color: "var(--color-roast)" }}>{a}</p>}
            </div>
          ))}
        </div>
      </ColorBlock>
      </GlowCard>
    </section>
  );
}
