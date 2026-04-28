import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ApplianceCard } from "@/components/site/appliance-card";
import { AnimatedStats } from "@/components/site/animated-stats";
import {
  appliances,
  blogPosts,
  certifiedBrands,
  phoneDisplay,
  phoneTel,
  stats,
  whyUs,
} from "@/lib/data";
import { getIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Appliance Repair Done Right",
  description:
    "Fast, reliable & professional appliance repair you can trust. Call +1 (202) 438-1210 to schedule service.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1) Hero */}
      <section className="bg-[#0f172a] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div className="space-y-6">
            <Badge className="bg-white/10 text-white hover:bg-white/15">
              Falls Church • Northern VA • DC • MD
            </Badge>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Appliance Repair Done Right
            </h1>
            <p className="max-w-xl text-base text-white/80 sm:text-lg">
              Fast, Reliable & Professional Service You Can Trust
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                <a href={`tel:${phoneTel}`}>Call {phoneDisplay}</a>
              </Button>
              <Button
                asChild
                className="bg-[#f97316] text-white hover:bg-[#ea580c]"
              >
                <Link href="/contact">Schedule Service</Link>
              </Button>
            </div>
            <p className="text-sm text-white/70">
              Same-day and next-day appointments available when possible.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              // src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80"
              // src="/Applance image.png"
              // src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=1600&q=80"
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
              alt="Appliance repair technician working on a kitchen appliance"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2) Appliance Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
                We repair all major appliances
              </h2>
              <p className="text-sm text-slate-700 sm:text-base">
                From cooling to cooking to cleaning — we’ll get you back up and
                running.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/services">View all services</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {appliances.map((a) => (
              <ApplianceCard key={a.name} item={a} />
            ))}
          </div>
        </div>
      </section>

      {/* 3) Who We Serve */}
      <section className="bg-[#0f172a] text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Who we serve
            </h2>
            <p className="text-sm text-white/75 sm:text-base">
              Professional service built for busy schedules.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Homeowners",
                text: "Quick scheduling, clean work, and reliable fixes you can feel good about.",
              },
              {
                title: "Landlords",
                text: "Responsive repairs to keep tenants happy and properties protected.",
              },
              {
                title: "Property Managers",
                text: "Consistent communication, documentation, and dependable turnaround.",
              },
            ].map((x) => (
              <Card
                key={x.title}
                className="border-white/10 bg-white/5 p-6 text-white shadow-sm"
              >
                <div className="text-base font-semibold">{x.title}</div>
                <p className="mt-2 text-sm leading-6 text-white/75">{x.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4) Brand Logo Marquee */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-semibold text-[#0f172a]">
              Trusted with leading brands
            </div>
            <div className="hidden text-sm text-slate-600 sm:block">
              Parts • Diagnostics • Repairs
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border bg-white">
            <div className="flex w-[200%] animate-marquee items-center gap-10 px-8 py-6">
              {[...certifiedBrands, ...certifiedBrands].map((b, idx) => (
                <div
                  key={`${b}-${idx}`}
                  className="text-base font-semibold text-slate-700 sm:text-lg"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5) How It Works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
              How it works
            </h2>
            <p className="text-sm text-slate-700 sm:text-base">
              A simple process designed to be clear and stress-free.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {[
              "Schedule",
              "Estimate",
              "Parts Order",
              "Repair",
              "Payment & Follow-Up",
            ].map((step, i) => (
              <Card key={step} className="p-6">
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-full bg-[#0f172a] text-sm font-semibold text-white">
                    {i + 1}
                  </div>
                  <div className="font-semibold text-slate-800">{step}</div>
                </div>
                <Separator className="my-4" />
                <p className="text-sm leading-6 text-slate-700">
                  {i === 0 &&
                    "Choose a time, tell us what’s going on, and we’ll confirm promptly."}
                  {i === 1 &&
                    "We diagnose the issue and provide a clear, transparent estimate."}
                  {i === 2 &&
                    "If needed, we order the correct parts and keep you updated."}
                  {i === 3 &&
                    "We complete the repair with care and verify everything works."}
                  {i === 4 &&
                    "Pay securely, then we follow up and stand behind our work."}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Why Choose Us */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
              Why choose ProFix
            </h2>
            <p className="text-sm text-slate-700 sm:text-base">
              Professional service with a local-first mindset.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {whyUs.map((w) => {
              const Icon = getIcon(w.icon);
              return (
                <Card key={w.title} className="p-6">
                  <div className="grid size-10 place-items-center rounded-xl bg-slate-50">
                    <Icon className="size-5 text-[#0f172a]" />
                  </div>
                  <div className="mt-4 font-semibold text-slate-800">
                    {w.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {w.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7) Animated Stats */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
              Proven results
            </h2>
            <p className="text-sm text-slate-700 sm:text-base">
              Experience you can rely on — backed by consistent service quality.
            </p>
          </div>

          <div className="mt-8">
            <AnimatedStats stats={stats} />
          </div>
        </div>
      </section>

      {/* 8) Certified Brands */}
      {/* <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
              Factory Certified Service
            </h2>
            <p className="text-sm text-slate-700 sm:text-base">
              Our technicians service a wide range of trusted manufacturers.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {certifiedBrands.map((b) => (
              <Badge key={b} variant="secondary" className="px-3 py-1">
                {b}
              </Badge>
            ))}
          </div>
        </div>
      </section> */}

      {/* 9) Blog Teasers */}
      {/* <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="font-heading text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
                Helpful tips & guides
              </h2>
              <p className="text-sm text-slate-700 sm:text-base">
                Simple maintenance advice to avoid costly breakdowns.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/contact">Ask a question</Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {blogPosts.map((p) => (
              <Card key={p.slug} className="p-6">
                <div className="text-xs font-medium text-slate-500">
                  {new Date(p.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <div className="mt-2 font-semibold text-slate-800">
                  {p.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {p.excerpt}
                </p>
                <div className="mt-4 text-sm font-semibold text-[#0f172a]">
                  Read more <span aria-hidden>→</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* 10) Bottom CTA Banner */}
      <section className="bg-[#f97316] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to get your appliance fixed?
            </div>
            <div className="mt-2 text-white/90">
              Call {phoneDisplay} or schedule service online.
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              <a href={`tel:${phoneTel}`}>Call Now</a>
            </Button>
            <Button
              asChild
              className="bg-white text-[#0f172a] hover:bg-white/90"
            >
              <Link href="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
