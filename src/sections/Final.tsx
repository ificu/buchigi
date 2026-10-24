import { Button, ColorBlock } from "@/components/ds";
import { GlowCard } from "@/components/ui/spotlight-card";
import { scrollToId } from "@/lib/scroll";

export function Final() {
  return (
    <section className="wrap sec">
      <GlowCard customSize glowColor="coffee" backdrop="transparent" radius={20} className="block rounded-[20px] p-0 shadow-none backdrop-blur-none">
        <ColorBlock color="navy" align="center" eyebrow="No Drop" title="가족의 추억이, 부모님의 오늘과 내일을 지키도록" body="오늘 사진 한 장으로 첫 대화를 준비해 보세요."
          actions={<Button onClick={() => scrollToId("pricing")}>2주 무료로 시작하기</Button>}
          style={{ padding: "88px var(--space-xxl)", borderRadius: 17, background: "radial-gradient(80% 90% at 50% 120%, rgba(198,124,78,.5), transparent 70%), var(--gradient-dark)" }} />
      </GlowCard>
    </section>
  );
}
