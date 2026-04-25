import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { certifiedBrands } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Empire Appliance Repair — our story, values, and the team behind our service.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="space-y-3">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
            About ProFix
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-slate-700 sm:text-base">
            Empire Appliance Repair is a locally owned company serving Falls
            Church and the greater DMV area. We focus on clear communication,
            quality repairs, and respectful in-home service — so you can get
            back to your routine without the stress of a broken appliance.
          </p>
        </div>

        <Separator className="my-10" />

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Years Serving the DMV", value: "11+" },
            { label: "Appointments Completed", value: "120k+" },
            { label: "Customer Satisfaction Focus", value: "5-star mindset" },
          ].map((s) => (
            <Card key={s.label} className="p-6">
              <div className="font-heading text-3xl font-semibold text-[#0f172a]">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-slate-700">{s.label}</div>
            </Card>
          ))}
        </div>

        <Separator className="my-10" />

        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a]">
            Our Certifications
          </h2>
          <p className="text-sm text-slate-700 sm:text-base">
            We service a wide range of manufacturers and stay up-to-date on best
            practices, diagnostics, and safe repairs.
          </p>
          <div className="flex flex-wrap gap-2">
            {certifiedBrands.map((b) => (
              <Badge key={b} variant="secondary" className="px-3 py-1">
                {b}
              </Badge>
            ))}
          </div>
        </div>

        <Separator className="my-10" />

        <div className="space-y-4">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a]">
            Meet the team
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Alex Rivera", role: "Lead Technician" },
              { name: "Taylor Morgan", role: "Service Coordinator" },
              { name: "Jordan Lee", role: "Senior Technician" },
            ].map((m) => (
              <Card key={m.name} className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative size-12 overflow-hidden rounded-full bg-slate-100">
                    <Image
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{m.name}</div>
                    <div className="text-sm text-slate-700">{m.role}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  Friendly, detail-oriented, and focused on doing the job right
                  the first time.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

