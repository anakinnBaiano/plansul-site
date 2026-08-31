"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import type { ReactNode } from "react";

type HeroProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  newsCta?: { label: string; href: string };
  images?: string[];
  imageAlt?: string;
};

// Troca de imagem do card do Hero (quando houver mais de uma foto em `images`).
const SLIDE_INTERVAL_MS = 6000;

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  newsCta,
  images = [],
  imageAlt,
}: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-6 w-full sm:h-8"
      >
        <defs>
          <linearGradient id="hero-wave-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0a3e61" />
            <stop offset="100%" stopColor="#06958e" />
          </linearGradient>
        </defs>
        <path
          d="M0,20 C240,40 480,0 720,20 C960,40 1200,0 1440,20 L1440,40 L0,40 Z"
          fill="url(#hero-wave-gradient)"
        />
      </svg>
      <div className="mx-auto grid max-w-content items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:py-24 lg:px-8">
        <div className="lg:col-span-2">
          {eyebrow && (
            <p className="text-sm font-bold uppercase tracking-wide text-plansul-teal-dark">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-2 text-3xl font-bold leading-tight text-plansul-blue sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-lg text-slate-600">{subtitle}</p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-plansul-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-plansul-blue-light"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-plansul-blue px-6 py-3 text-sm font-semibold text-plansul-blue transition-colors hover:bg-plansul-blue hover:text-white"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {newsCta && (
            <Link
              href={newsCta.href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-plansul-teal transition-colors hover:text-plansul-teal-dark hover:underline"
            >
              <Newspaper size={16} aria-hidden="true" />
              {newsCta.label}
            </Link>
          )}
        </div>

        <div className="lg:col-span-3 motion-safe:animate-float">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
            {images.length > 0 ? (
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${current * (100 / images.length)}%)`,
                }}
              >
                {images.map((src, i) => (
                  <div key={src} className="relative h-full shrink-0" style={{ width: `${100 / images.length}%` }}>
                    <Image
                      src={src}
                      alt={imageAlt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="flex h-full w-full items-center justify-center text-sm text-slate-400"
                role="img"
                aria-label="Espaço reservado para imagem institucional de alta qualidade"
              >
                [PREENCHER: imagem institucional]
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Fotos em destaque">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Mostrar foto ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-plansul-blue" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
