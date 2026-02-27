"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PORTFOLIO } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-section lg:py-section-lg bg-surface/50"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <SectionHeading
          id="portfolio-heading"
          title={PORTFOLIO.title}
          subtitle={PORTFOLIO.subtitle}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.items.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-card bg-white border border-border overflow-hidden hover:shadow-soft-lg hover:border-accent/20 transition-all duration-300"
            >
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="aspect-video bg-surface relative overflow-hidden">
                  {/* Placeholder ako nema slike - koristi se gradient ili placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                    <span className="font-mono text-sm text-text-secondary">
                      {project.title}
                    </span>
                  </div>
                  {/* Ako postoji project.image koristi Next/Image */}
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="w-4 h-4 opacity-70" aria-hidden />
                  </h3>
                  <p className="mt-2 text-text-secondary text-sm">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-surface text-xs font-medium text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
