import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Empire Appliance Repair | Falls Church, VA",
    template: "%s | Empire Appliance Repair",
  },
  description:
    "Fast, reliable appliance repair in Northern Virginia, Washington DC, and nearby Maryland. Call +1 (202) 438-1210 to schedule service.",
  metadataBase: new URL("https://profix-appliance-repair.local"),
  openGraph: {
    title: "Empire Appliance Repair",
    description:
      "Appliance Repair Done Right — fast, reliable & professional service you can trust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
