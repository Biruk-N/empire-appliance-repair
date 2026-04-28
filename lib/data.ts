import type { LucideIcon } from "lucide-react";

export type Appliance = {
  name: string;
  icon: string;
  description: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
  icon: string;
};

export type BlogPostTeaser = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const phoneDisplay = "+1 (202) 438-1210";
export const phoneTel = "+17039916445";

export const appliances: Appliance[] = [
  {
    name: "Refrigerators",
    icon: "Refrigerator",
    description: "Cooling issues, leaks, ice maker problems, and more.",
  },
  {
    name: "Dishwashers",
    icon: "Droplets",
    description: "Not draining, not cleaning, noisy cycles, and leaks.",
  },
  {
    name: "Washers",
    icon: "WashingMachine",
    description: "Won’t spin, won’t drain, errors, and vibration issues.",
  },
  {
    name: "Dryers",
    icon: "Wind",
    description: "No heat, long dry times, noisy operation, and shutdowns.",
  },
  {
    name: "Ovens",
    icon: "ChefHat",
    description: "Temperature problems, igniter issues, and control failures.",
  },
  {
    name: "Stoves & Cooktops",
    icon: "Flame",
    description: "Burner, ignition, and performance issues for gas/electric.",
  },
  {
    name: "Microwaves",
    icon: "Microwave",
    description: "Not heating, sparking, door switches, and turntable issues.",
  },
  {
    name: "Freezers",
    icon: "Snowflake",
    description: "Not freezing, frost build-up, and thermostat issues.",
  },
  {
    name: "Ice Makers",
    icon: "IceCreamCone",
    description: "No ice, small cubes, leaks, and dispenser issues.",
  },
  {
    name: "Wine Coolers",
    icon: "Wine",
    description: "Cooling inconsistencies, fan noise, and sensor failures.",
  },
  {
    name: "Range Hoods",
    icon: "Fan",
    description: "Fan, filter, lighting, and ventilation problems.",
  },
  {
    name: "Garbage Disposals",
    icon: "Trash2",
    description: "Jams, leaks, clogs, and electrical failures.",
  },
];

export const services = appliances.map((a) => ({
  name: a.name,
  icon: a.icon,
  description: a.description,
}));

export const serviceAreas = {
  va: [
    "Falls Church",
    "Arlington",
    "Alexandria",
    "Vienna",
    "Tysons",
    "McLean",
    "Fairfax",
    "Annandale",
    "Springfield",
    "Reston",
    "Herndon",
    "Burke",
  ],
  dc: "All of Washington, DC",
  md: ["Bethesda", "Silver Spring", "Chevy Chase", "Takoma Park", "Rockville"],
};

export const stats: Stat[] = [
  { label: "Years in Business", value: 11, suffix: "+" },
  { label: "Jobs Completed", value: 120, suffix: "k+" },
  { label: "Brands Serviced", value: 20, suffix: "+" },
  { label: "Repeat Rate", value: 80, suffix: "%" },
];

export const whyUs: WhyUsItem[] = [
  {
    title: "Licensed & Insured Technicians",
    description: "Skilled pros who treat your home with care and respect.",
    icon: "ShieldCheck",
  },
  {
    title: "Exceptional Customer Support",
    description: "Clear updates, honest expectations, and friendly service.",
    icon: "Headset",
  },
  {
    title: "Locally Owned & Operated",
    description: "A local team that’s proud to serve our community.",
    icon: "MapPin",
  },
  {
    title: "90-Day Warranty on Repairs",
    description: "Confidence-backed repairs for peace of mind.",
    icon: "BadgeCheck",
  },
  {
    title: "Transparent Pricing, No Hidden Fees",
    description: "Up-front estimates and straightforward recommendations.",
    icon: "Receipt",
  },
];

export const blogPosts: BlogPostTeaser[] = [
  {
    title: "5 Signs Your Refrigerator Needs Repair",
    date: "2026-04-10",
    excerpt:
      "Warm spots, loud noises, and constant cycling can be early warning signs. Here’s what to watch for before a breakdown.",
    slug: "refrigerator-repair-signs",
  },
  {
    title: "Washer Not Draining? Common Causes & Fixes",
    date: "2026-03-22",
    excerpt:
      "From clogged pumps to faulty lid switches, we break down the most common reasons washers stop draining and what to do next.",
    slug: "washer-not-draining",
  },
  {
    title: "How to Extend the Life of Your Dishwasher",
    date: "2026-02-28",
    excerpt:
      "A few simple habits—like filter cleaning and correct loading—can make your dishwasher run better and last longer.",
    slug: "extend-dishwasher-life",
  },
];

export const certifiedBrands = [
  "LG",
  "GE",
  "Whirlpool",
  "Sub-Zero",
  "Liebherr",
  "Dacor",
  "Samsung",
  "Bosch",
];

export type IconName = Appliance["icon"] | WhyUsItem["icon"];
export type IconType = LucideIcon;
