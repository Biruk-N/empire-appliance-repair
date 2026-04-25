"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { phoneDisplay, phoneTel } from "@/lib/data";
import { Menu, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-lg bg-[#0f172a] text-white">
            PF
          </span>
          <span className="text-sm font-semibold tracking-tight text-[#0f172a] sm:text-base">
            Empire Appliance Repair
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((l) => {
                const active = pathname === l.href;
                return (
                  <NavigationMenuItem key={l.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={l.href}
                        className={[
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          active
                            ? "text-[#0f172a]"
                            : "text-slate-700 hover:text-[#0f172a]",
                        ].join(" ")}
                      >
                        {l.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            <Phone className="size-4 text-[#f97316]" />
            {phoneDisplay}
          </a>
          <Button
            asChild
            className="bg-[#f97316] text-white hover:bg-[#ea580c]"
          >
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>ProFix</SheetTitle>
              </SheetHeader>

              <div className="mt-6 grid gap-2">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={[
                        "rounded-lg px-3 py-2 text-sm font-medium",
                        active
                          ? "bg-slate-100 text-[#0f172a]"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#0f172a]",
                      ].join(" ")}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href={`tel:${phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold text-slate-800"
                >
                  <Phone className="size-4 text-[#f97316]" />
                  Call {phoneDisplay}
                </a>
                <Button
                  asChild
                  className="bg-[#f97316] text-white hover:bg-[#ea580c]"
                >
                  <Link href="/contact">Schedule Service</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

