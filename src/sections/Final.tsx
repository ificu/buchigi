import { Button, ColorBlock } from "@/components/ds";
import { GlowCard } from "@/components/ui/spotlight-card";
import { scrollToId } from "@/lib/scroll";

export function Final() {
  return (
    <section className="wrap sec">
      <GlowCard customSize glowColor="purple" backdrop="var(--color-block-navy)" radius={24} className="block rounded-[24px] p-0 shadow-none backdrop-blur-none">
        <ColorBlock color="navy" align="center" eyebrow="No Drop" title="가족의 추억이, 부모님의 오늘과 내일을 지키도록" body="오늘 사진 한 장으로 첫 대화를 준비해 보세요."
          actions={<Button variant="inverse" onClick={() => scrollToId("pricing")}>2주 무료로 시작하기</Button>}
          style={{ padding: "80px var(--space-xxl)", borderRadius: 21 }} />
      </GlowCard>
    </section>
  );
}
