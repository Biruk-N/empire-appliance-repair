"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import type { Appliance } from "@/lib/data";

export function ApplianceCard({ item }: { item: Appliance }) {
  const Icon = getIcon(item.icon);

  return (
    <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
      <Card className="h-full p-5 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-slate-50">
            <Icon className="size-5 text-[#0f172a]" />
          </div>
          <div className="font-semibold text-slate-800">{item.name}</div>
        </div>
      </Card>
    </motion.div>
  );
}

