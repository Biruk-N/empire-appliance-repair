import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { MapEmbed } from "@/components/site/map-embed";
import { serviceAreas } from "@/lib/data";

export const metadata: Metadata = {
  title: "Service Area",
  description:
    "See where Empire Appliance Repair provides service across Northern Virginia, Washington DC, and nearby Maryland.",
};

export default function ServiceAreaPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
            Service Area
          </h1>
          <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
            We proudly serve Falls Church and surrounding communities across
            Northern Virginia, all of Washington DC, and select cities in
            Maryland.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="h-[420px]">
            <MapEmbed className="h-full w-full" />
          </div>
          <Card className="p-6">
            <div className="font-semibold text-slate-800">
              Popular nearby areas
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {serviceAreas.va.map((c) => (
                <li key={c}>{c}, VA</li>
              ))}
            </ul>
            <div className="mt-6 text-sm font-semibold text-slate-800">
              Washington, DC
            </div>
            <div className="mt-2 text-sm text-slate-700">{serviceAreas.dc}</div>
            <div className="mt-6 text-sm font-semibold text-slate-800">
              Maryland
            </div>
            <ul className="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {serviceAreas.md.map((c) => (
                <li key={c}>{c}, MD</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

