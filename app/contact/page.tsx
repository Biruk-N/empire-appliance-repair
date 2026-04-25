import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/site/contact-form";
import { MapEmbed } from "@/components/site/map-embed";
import { phoneDisplay, phoneTel } from "@/lib/data";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Empire Appliance Repair to schedule service. Serving Falls Church, Northern VA, Washington DC, and nearby Maryland.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="space-y-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-[#0f172a] sm:text-4xl">
            Contact ProFix
          </h1>
          <p className="max-w-3xl text-sm text-slate-700 sm:text-base">
            Call, email, or send a message — we’ll respond quickly and help you
            get scheduled.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold text-slate-800">Contact Info</div>
            <div className="mt-4 grid gap-3 text-sm text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-[#f97316]" />
                <span>450 West Broad Street, Falls Church, VA 22046</span>
              </div>
              <a
                className="flex items-center gap-2 hover:text-[#0f172a]"
                href={`tel:${phoneTel}`}
              >
                <Phone className="size-4 text-[#f97316]" />
                {phoneDisplay}
              </a>
              <a
                className="flex items-center gap-2 hover:text-[#0f172a]"
                href="mailto:Empireappliacerepair44@gmail.com"
              >
                <Mail className="size-4 text-[#f97316]" />
                Empireappliacerepair44@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 text-[#f97316]" />
                <span>Mon–Sun 7:00 AM – 7:00 PM</span>
              </div>
            </div>

            <div className="mt-8 h-[260px]">
              <MapEmbed className="h-full w-full" zoom={11} />
            </div>
          </Card>

          <Card className="p-6">
            <div id="contact" className="scroll-mt-24">
              <div className="font-semibold text-slate-800">
                Request Service
              </div>
              <p className="mt-2 text-sm text-slate-700">
                This form opens your email client with the details pre-filled.
              </p>
              <div className="mt-6">
                <ContactForm className="grid gap-3" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

