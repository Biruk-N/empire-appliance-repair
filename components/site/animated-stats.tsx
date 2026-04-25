"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import type { Stat } from "@/lib/data";

export function AnimatedStats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <div className="text-3xl font-semibold tracking-tight text-[#0f172a]">
            {inView ? (
              <>
                <AnimatedValue target={s.value} />
                <span>{s.suffix ?? ""}</span>
              </>
            ) : (
              "0"
            )}
          </div>
          <div className="mt-1 text-sm text-slate-700">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function AnimatedValue({ target }: { target: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(mv, target, { duration: 1.2, ease: "easeOut" });
    return () => controls.stop();
  }, [mv, target]);

  return <motion.span>{rounded}</motion.span>;
}

