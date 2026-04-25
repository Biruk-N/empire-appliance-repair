import type { Metadata } from "next";
import { ServicesGrid } from "@/components/site/services-grid";
import { appliances, phoneDisplay } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore appliance repair services from ProFix. Call ${phoneDisplay} to schedule.`,
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
            Appliance Repair Services
          </h1>
          <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
            Full-service repairs for major household appliances — diagnostics,
            parts, and professional installation when needed.
          </p>
        </div>

        <div className="mt-10">
          <ServicesGrid items={appliances} />
        </div>
      </div>
    </div>
  );
}

