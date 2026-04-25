"use client";

import dynamic from "next/dynamic";

type Props = {
  className?: string;
  zoom?: number;
};

const ServiceAreaMap = dynamic(
  () =>
    import("@/components/site/service-area-map").then((m) => m.ServiceAreaMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full rounded-2xl border bg-slate-50" />
    ),
  }
);

export function MapEmbed({ className, zoom }: Props) {
  return <ServiceAreaMap className={className} zoom={zoom} />;
}

