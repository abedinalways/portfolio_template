'use client';

import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../ui/motion-premitive';
import { sound } from '@/lib/sound';

type Category = 'all' | 'webgl' | 'ai' | 'fullstack';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Category;
  categoryName: string;
  description: string;
  tags: string[];
  metric: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'agentic-canvas',
    title: 'Agentic Canvas & Studio',
    subtitle: 'Autonomous AI Workflow Orchestrator',
    category: 'ai',
    categoryName: 'AI & Systems',
    description:
      'Engineered a real-time autonomous AI agent orchestrator with visual node graph execution, streaming LLM responses, and sandbox tool execution.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Gemini SDK', 'Tailwind CSS'],
    metric: '100ms latency',
    year: '2026',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'shader-lab',
    title: 'WebGL Shader Laboratory',
    subtitle: 'Interactive Procedural Graphics Engine',
    category: 'webgl',
    categoryName: 'WebGL & Graphics',
    description:
      'A WebGL 2.0 playground powered by OGL & GLSL fragment math, featuring real-time particle distortion, raymarching, and custom noise filters.',
    tags: ['OGL', 'WebGL 2.0', 'GLSL Shaders', 'Three.js', 'React 19'],
    metric: '60fps mobile',
    year: '2025',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'editorial-ds',
    title: 'Editorial Design System',
    subtitle: 'High-Density Component Architecture',
    category: 'fullstack',
    categoryName: 'Fullstack & UI',
    description:
      'An accessible, ultra-minimalist UI system with zero runtime CSS overhead, built for fluid view transitions and dark-mode aesthetic elegance.',
    tags: ['Next.js 16', 'Tailwind CSS v4', 'Motion', 'Radix Primitives'],
    metric: '100 Lighthouse',
    year: '2025',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    id: 'ai-copilot',
    title: 'Context-Aware AI Companion',
    subtitle: 'Intelligent Code Review & Refactor Assistant',
    category: 'ai',
    categoryName: 'AI & Systems',
    description:
      'Browser extension enabling natural language DOM refactoring, inline AI suggestions, and automated code review workflows.',
    tags: ['Chrome Extension API', 'TypeScript', 'OpenAI API', 'Tailwind CSS'],
    metric: '5k+ Installs',
    year: '2025',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
];

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'webgl', label: 'WebGL & Graphics' },
  { id: 'ai', label: 'AI & Systems' },
  { id: 'fullstack', label: 'Fullstack & UI' },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function ProjectsSection(): ReactNode {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filtered = PROJECTS.filter(
    p => activeFilter === 'all' || p.category === activeFilter,
  );

  const handleFilterClick = (cat: Category) => {
    sound.playClick();
    setActiveFilter(cat);
  };

  return (
    <section id="projects" className="relative w-full py-28 border-t border-foreground/10 font-sans">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block mb-2 font-semibold">
              ✦ Selected Works (2024 — 2026)
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-serif italic">
              Crafted Projects & Engineering Labs
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map(cat => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleFilterClick(cat.id)}
                  onMouseEnter={() => sound.playPop()}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-foreground text-background font-medium shadow-md scale-105'
                      : 'bg-foreground/5 text-foreground/70 hover:bg-foreground/10 hover:text-foreground'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between rounded-3xl border border-foreground/10 bg-background/50 p-7 sm:p-8 backdrop-blur-md shadow-sm transition-all duration-500 hover:border-foreground/30 hover:shadow-2xl"
              >
                <div>
                  {/* Top Meta Line */}
                  <div className="flex items-center justify-between text-xs font-mono text-foreground/50 mb-5">
                    <span className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      {project.categoryName}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-foreground/5 px-2.5 py-0.5 text-[10px] border border-foreground/10 text-foreground/70">
                        {project.metric}
                      </span>
                      <span>· {project.year}</span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-medium tracking-tight text-foreground group-hover:text-foreground transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-5 w-5 text-foreground/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
                    </h3>
                    <p className="text-xs font-mono text-foreground/50 mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Bar */}
                <div className="space-y-4 pt-4 border-t border-foreground/8">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/8 bg-foreground/4 px-3 py-1 text-[11px] font-mono text-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5 pt-1 text-xs font-mono">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sound.playPop()}
                        className="inline-flex items-center gap-1.5 text-foreground/80 hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Live Preview</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => sound.playPop()}
                        className="inline-flex items-center gap-1.5 text-foreground/60 hover:text-foreground transition-colors"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

