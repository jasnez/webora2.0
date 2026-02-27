"use client";

import {
  Code2,
  Palette,
  Search,
  Shield,
  AppWindow,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardIcon } from "@/components/ui/Card";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Search,
  Shield,
  AppWindow,
  Cloud,
};

export function Services() {
  return (
    <section
      id="usluge"
      className="py-section lg:py-section-lg bg-surface/50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="services-heading"
          title={SERVICES.title}
          subtitle={SERVICES.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.items.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <Card key={service.id}>
                <CardIcon>
                  <Icon className="w-6 h-6" aria-hidden />
                </CardIcon>
                <h3 className="font-display font-bold text-lg text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
