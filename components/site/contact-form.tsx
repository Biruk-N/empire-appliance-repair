"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const APPLIANCES = [
  "Refrigerator",
  "Washer",
  "Dryer",
  "Dishwasher",
  "Oven",
  "Stove & Cooktop",
  "Microwave",
  "Freezer",
  "Ice Maker",
  "Wine Cooler",
  "Range Hood",
  "Garbage Disposal",
  "Other",
] as const;

type Props = {
  className?: string;
};

export function ContactForm({ className }: Props) {
  const [result, setResult] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [appliance, setAppliance] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("loading");

    if (!appliance) {
      setResult("error");
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    // formData.append("access_key", "db92d57f-5a18-41c4-8cb4-d51a3df472d2");
    formData.append("access_key", "1234567890");
    formData.append("subject", `New Repair Request - ${appliance}`);
    formData.append("from_name", "Empire Appliance Repair Website");
    formData.append("appliance", appliance);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data: { success?: boolean } = await response.json();
      setResult(data.success ? "success" : "error");

      if (data.success) {
        (event.target as HTMLFormElement).reset();
        setAppliance("");
      }
    } catch {
      setResult("error");
    }
  };

  if (result === "success") {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-8 text-center space-y-3">
        <div className="text-4xl">🎉</div>
        <h3 className="text-xl font-semibold text-green-800">
          Request Sent Successfully!
        </h3>
        <p className="text-green-600">We'll get back to you within 1 business day.</p>
        <Button variant="outline" onClick={() => setResult("idle")}>
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={["space-y-4", className].filter(Boolean).join(" ")}
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input type="text" name="name" placeholder="Full Name" required />
        <Input type="email" name="email" placeholder="Email Address" required />
      </div>

      {/* Phone + Appliance */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input type="tel" name="phone" placeholder="Phone Number" required />
        <Select value={appliance} onValueChange={setAppliance}>
          <SelectTrigger>
            <SelectValue placeholder="Select Appliance" />
          </SelectTrigger>
          <SelectContent>
            {APPLIANCES.map((a) => (
              <SelectItem key={a} value={a}>
                {a}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <Textarea
        name="message"
        placeholder="Describe the issue with your appliance..."
        rows={4}
        required
      />

      {/* Error */}
      {result === "error" && (
        <p className="text-sm text-red-500 text-center">
          ❌ Something went wrong. Please try again or call us directly.
        </p>
      )}

      {/* Submit */}
      <Button type="submit" className="w-full" disabled={result === "loading"}>
        {result === "loading" ? "Sending..." : "Request Service →"}
      </Button>
    </form>
  );
}

