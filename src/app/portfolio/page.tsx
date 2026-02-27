import { Portfolio } from "@/components/sections/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Naši radovi: web stranice i aplikacije izgrađene sa React i Next.js. Studije slučaja i metrike uspjeha.",
};

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
    </>
  );
}
