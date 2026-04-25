"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Appliance } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export function ServicesGrid({ items }: { items: Appliance[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((a) => {
        const Icon = getIcon(a.icon);
        return (
          <motion.div
            key={a.name}
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Card className="h-full p-6">
              <div className="flex items-start gap-4">
                <div className="grid size-11 place-items-center rounded-2xl bg-slate-50">
                  <Icon className="size-5 text-[#0f172a]" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">{a.name}</div>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {a.description}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href="/contact#contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

