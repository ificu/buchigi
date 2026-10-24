import { motion } from "motion/react";
import { ColorBlock } from "@/components/ds";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";

// 예시 후기입니다. 실제 서비스 공개 전에 실제 이용자 후기로 교체해야 해요.
const testimonials: Testimonial[] = [
  { text: "엄마가 요즘 전화로 제주도 얘기를 그렇게 하세요. 검사하자는 말 없이도 상태를 알 수 있어서 마음이 놓여요.", name: "이○○ 님 · 52세", role: "서울 거주, 부산 어머니", avatarColor: "var(--color-block-mint)" },
  { text: "아버지가 기계를 싫어하시는데, 그냥 전화라서 거부감이 없으셨어요. 손주 영상 오는 날만 기다리세요.", name: "박○○ 님 · 47세", role: "세종 거주, 대구 아버지", avatarColor: "var(--color-block-lilac)" },
  { text: "형제들이 같이 기록을 보니까 누가 언제 전화드릴지 자연스럽게 정해지더라고요.", name: "최○○ 님 · 55세", role: "인천 거주, 광주 부모님", avatarColor: "var(--color-block-pink)" },
  { text: "처음엔 누구 전화냐고 하시더니, 이제는 그 시간만 되면 전화기 옆에 앉아 계세요.", name: "김○○ 님 · 49세", role: "수원 거주, 전주 어머니", avatarColor: "var(--color-block-lime)" },
  { text: "해외에 살아서 자주 못 챙기는데, 월간 기록을 보면 부모님 하루가 그려져요.", name: "한○○ 님 · 44세", role: "미국 거주, 서울 부모님", avatarColor: "var(--color-block-coral)" },
  { text: "‘단어 떠올리기’가 몇 주 이어서 낮게 나와 상담 안내를 받았어요. 덕분에 미루지 않고 아버지와 병원에 다녀왔어요.", name: "정○○ 님 · 58세", role: "대전 거주, 청주 아버지", avatarColor: "var(--color-block-cream)" },
  { text: "결혼기념일 알림 덕분에 형제들이 오랜만에 다 같이 부모님께 영상 통화를 드렸어요.", name: "윤○○ 님 · 51세", role: "부산 거주, 창원 부모님", avatarColor: "var(--color-block-mint)" },
  { text: "‘1년 전 오늘’ 영상을 보시고 아버지가 그날 얘기를 한참 하셨대요. 그 대화가 기록에 남아 있어서 뭉클했어요.", name: "강○○ 님 · 46세", role: "고양 거주, 춘천 아버지", avatarColor: "var(--color-block-lilac)" },
  { text: "검사받자고 하면 화부터 내시던 분인데, 이건 그냥 수다라고 생각하세요. 그게 제일 좋아요.", name: "조○○ 님 · 53세", role: "성남 거주, 포항 어머니", avatarColor: "var(--color-block-pink)" },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const card = "bg-white text-[var(--color-ink)] border-transparent shadow-none read max-[560px]:p-6";

export function Reviews() {
  return (
    <section className="wrap sec" id="reviews">
      <ColorBlock color="black" style={{ background: "var(--gradient-dark)" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4 max-w-[640px] mx-auto"
        >
          <div className="t-eyebrow">이용 후기</div>
          <h2 className="t-display-lg">가족들이 먼저 달라진 걸 느꼈어요</h2>
          <p className="t-subhead" style={{ color: "var(--color-inverse-ink-soft)" }}>부모님과 함께 쓰고 있는 자녀분들의 이야기예요.</p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} cardClassName={card} glowColor="coffee" duration={15} />
          <TestimonialsColumn testimonials={secondColumn} cardClassName={card} glowColor="coffee" className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} cardClassName={card} glowColor="coffee" className="hidden lg:block" duration={17} />
        </div>
      </ColorBlock>
    </section>
  );
}
