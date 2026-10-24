"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { GlowCard, type GlowColor } from "@/components/ui/spotlight-card";

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  image?: string; // Falls back to an initial avatar when omitted
  avatarColor?: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  cardClassName?: string;
  testimonials: Testimonial[];
  duration?: number;
  glowColor?: GlowColor; // Wraps each card in a spotlight GlowCard
}) => {
  const reduceMotion = useReducedMotion();
  const cardClass = cn("p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full", props.cardClassName);
  return (
    <div className={props.className}>
      <motion.div
        animate={reduceMotion ? undefined : { translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role, avatarColor }, i) => {
                const body = (
                  <>
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                      {image ? (
                        <img width={40} height={40} src={image} alt={name} className="h-10 w-10 rounded-full" />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="h-10 w-10 flex-none rounded-full flex items-center justify-center font-medium"
                          style={{ background: avatarColor ?? "var(--color-surface-soft)" }}
                        >
                          {name.charAt(0)}
                        </span>
                      )}
                      <div className="flex flex-col">
                        <div className="font-medium tracking-tight leading-5">{name}</div>
                        <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                      </div>
                    </div>
                  </>
                );
                // The second copy only exists to make the loop seamless; hide it from screen readers.
                const hidden = index === 1 ? true : undefined;
                return props.glowColor ? (
                  <GlowCard key={i} aria-hidden={hidden} customSize glowColor={props.glowColor} backdrop="#fff" radius={24}
                    className={cn(cardClass, "block backdrop-blur-none")}>
                    {body}
                  </GlowCard>
                ) : (
                  <div key={i} aria-hidden={hidden} className={cardClass}>{body}</div>
                );
              })}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
