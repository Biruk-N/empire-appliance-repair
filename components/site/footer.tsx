import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/site/contact-form";
import { appliances, phoneDisplay, phoneTel, serviceAreas } from "@/lib/data";
import { Camera, Globe, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="text-base font-semibold text-[#0f172a]">
              Empire Appliance Repair
            </div>
            <p className="text-sm leading-6 text-slate-700">
              Fast, reliable appliance repair for homeowners and property
              managers across Northern Virginia, DC, and nearby Maryland.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-[#0f172a]">Services</div>
            <ul className="grid gap-2 text-sm">
              {appliances.slice(0, 6).map((s) => (
                <li key={s.name}>
                  <Link
                    href="/services"
                    className="text-slate-700 hover:text-[#0f172a]"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-[#0f172a]">
              Service Area
            </div>
            <ul className="grid gap-2 text-sm text-slate-700">
              {serviceAreas.va.slice(0, 6).map((c) => (
                <li key={c}>{c}, VA</li>
              ))}
              <li>{serviceAreas.dc}</li>
              {serviceAreas.md.slice(0, 2).map((c) => (
                <li key={c}>{c}, MD</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-[#0f172a]">Contact</div>
            <div className="grid gap-2 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-[#f97316]" />
                <span>450 West Broad Street, Falls Church, VA 22046</span>
              </div>
              <a
                href={`tel:${phoneTel}`}
                className="flex items-center gap-2 hover:text-[#0f172a]"
              >
                <Phone className="size-4 text-[#f97316]" />
                {phoneDisplay}
              </a>
              <a
                href="mailto:Empireappliacerepair44@gmail.com"
                className="flex items-center gap-2 hover:text-[#0f172a]"
              >
                <Mail className="size-4 text-[#f97316]" />
                Empireappliacerepair44@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="rounded-md border p-2 text-slate-700 hover:bg-slate-50 hover:text-[#0f172a]"
                aria-label="Website"
              >
                <Globe className="size-4" />
              </a>
              <a
                href="#"
                className="rounded-md border p-2 text-slate-700 hover:bg-slate-50 hover:text-[#0f172a]"
                aria-label="Social"
              >
                <Camera className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="space-y-2">
            <div className="text-sm font-semibold text-[#0f172a]">
              Send a quick message
            </div>
            <p className="text-sm text-slate-700">
              Prefer email? Fill this out and we’ll get back to you quickly.
            </p>
          </div>
          <ContactForm className="grid gap-3" />
        </div>

        <Separator className="my-10" />

        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Empire Appliance Repair. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

