'use client';

import type { ReactNode } from 'react';
import { Blocks, Cpu, Gauge, Layers } from 'lucide-react';
import { FadeIn } from '../ui/motion-premitive';
import { sound } from '@/lib/sound';

type Stat = { value: string; label: string };
type FocusArea = { icon: typeof Layers; title: string; body: string };
type ToolkitGroup = { title: string; items: readonly string[] };

const STATS: readonly Stat[] = [
  { value: '5+', label: 'Years shipping interfaces' },
  { value: '40+', label: 'Products and experiments' },
  { value: '100', label: 'Lighthouse score target' },
  { value: '60fps', label: 'Frame budget, always' },
];

const FOCUS_AREAS: readonly FocusArea[] = [
  {
    icon: Layers,
    title: 'Interface craft',
    body: 'Typography, spacing and motion tuned until a layout feels inevitable rather than decorated.',
  },
  {
    icon: Gauge,
    title: 'Performance first',
    body: 'Server components, zero-runtime styling and a strict eye on what ships to the client bundle.',
  },
  {
    icon: Cpu,
    title: 'AI-native products',
    body: 'Streaming agents and tooling that turn complex, multi-step workflows into immediate feedback.',
  },
  {
    icon: Blocks,
    title: 'Systems thinking',
    body: 'Primitives, tokens and design systems that stay predictable as a product keeps growing.',
  },
];

const TOOLKIT: readonly ToolkitGroup[] = [
  {
    title: 'Core',
    items: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
  },
  {
    title: 'Motion & 3D',
    items: ['Motion', 'OGL', 'GLSL Shaders', 'Lenis'],
  },
  {
    title: 'Systems',
    items: ['Node.js', 'REST & GraphQL', 'PostgreSQL', 'Edge Runtime'],
  },
  {
    title: 'AI',
    items: ['Gemini SDK', 'OpenAI API', 'RAG Pipelines', 'Vector Search'],
  },
];

export function AboutSection(): ReactNode {
  return (
    <section id="about" className="relative w-full pb-28 font-sans">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">

        {/* Intro */}
        <FadeIn className="flex flex-col gap-5">
          <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block font-semibold">
            ✦ About
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-serif italic max-w-[26ch]">
            Designing calm interfaces for complex systems
          </h2>
          <div className="max-w-[62ch] space-y-5 text-[17px] leading-relaxed text-foreground/65">
            <p>
              I am a frontend engineer and AI enthusiast working at the point
              where interface craft meets engineering discipline. My focus is
              software that loads fast, reads clearly and responds instantly,
              without the noise that usually comes with complexity.
            </p>
            <p>
              Over the last five years I have shipped design systems, real-time
              dashboards, WebGL experiments and AI-assisted tooling. I care
              about accessible markup, honest performance budgets and interfaces
              that stay predictable as a product scales.
            </p>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn
          delay={0.1}
          className="mt-14 mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {STATS.map(stat => (
            <div
              key={stat.label}
              className="rounded-3xl border border-foreground/10 bg-background/50 p-5 shadow-sm backdrop-blur-md"
            >
              <div className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] font-mono uppercase tracking-wider leading-snug text-foreground/50">
                {stat.label}
              </div>
            </div>
          ))}
        </FadeIn>

        {/* Focus areas */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {FOCUS_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <FadeIn
                key={area.title}
                delay={0.05 * idx}
                className="group flex gap-4 rounded-3xl border border-foreground/10 bg-background/50 p-6 shadow-sm backdrop-blur-md transition-all duration-500 hover:border-foreground/30 hover:shadow-2xl"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-foreground/5 text-amber-600 ring-1 ring-foreground/8 dark:text-amber-400">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-medium tracking-tight text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/65">
                    {area.body}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Toolkit */}
        <FadeIn delay={0.1}>
          <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block font-semibold mb-7">
            ✦ Toolkit
          </span>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TOOLKIT.map(group => (
              <div key={group.title}>
                <h3 className="mb-3 text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <li
                      key={item}
                      onMouseEnter={() => sound.playPop()}
                      className="rounded-full border border-foreground/8 bg-foreground/4 px-3 py-1 text-[11px] font-mono text-foreground/70 transition-colors duration-300 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

