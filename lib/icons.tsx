import type { IconType, IconName } from "@/lib/data";
import {
  BadgeCheck,
  ChefHat,
  Droplets,
  Fan,
  Flame,
  Headset,
  IceCreamCone,
  MapPin,
  Microwave,
  Receipt,
  Refrigerator,
  ShieldCheck,
  Snowflake,
  Trash2,
  WashingMachine,
  Wind,
  Wine,
  Wrench,
} from "lucide-react";

const ICONS: Record<string, IconType> = {
  Refrigerator,
  Droplets,
  WashingMachine,
  Wind,
  ChefHat,
  Flame,
  Microwave,
  Snowflake,
  IceCreamCone,
  Wine,
  Fan,
  Trash2,
  ShieldCheck,
  Headset,
  MapPin,
  BadgeCheck,
  Receipt,
};

export function getIcon(name: IconName): IconType {
  return ICONS[name] ?? Wrench;
}

