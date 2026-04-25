"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  className?: string;
  subject?: string;
};

export function ContactForm({
  className,
  subject = "Empire Appliance Repair — Service Request",
}: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const to = "Empireappliacerepair44@gmail.com";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message,
    ].join("\n");

    const params = new URLSearchParams({
      subject,
      body,
    });

    return `mailto:${to}?${params.toString()}`;
  }, [email, message, name, phone, subject]);

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
          required
        />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          inputMode="tel"
        />
        <div className="hidden sm:block" />
      </div>
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="min-h-28"
        required
      />
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
}

