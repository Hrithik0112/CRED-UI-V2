"use client";

import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";

const Paragraph = ({ value }: { value: string }) => {
  const container = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.70", "end 0.52"],
  });

  const words = value.split(" ");

  return (
    <p
      ref={container}
      className="text-[70px] font-denton font-light leading-[100px] text-left flex flex-wrap tracking-[1.26px]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length); // prettier-ignore

        // console.log([start, end]);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default Paragraph;

const Word = ({
  children,
  range,
  progress,
}: {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="mr-3 mt-3 relative">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
