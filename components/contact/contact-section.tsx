'use client';

import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../ui/motion-premitive';
import { ContactButton } from '../buttons/contact-button';
import { sound } from '@/lib/sound';

type Social = { label: string; href: string };

const SOCIALS: readonly Social[] = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Email', href: 'mailto:sheikh.minhajul1205045@gmail.com' },
];

export function ContactSection(): ReactNode {
  return (
    <section
      id="contact"
      className="relative w-full border-t border-foreground/10 py-28 font-sans"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <FadeIn className="flex flex-col gap-5">
          <span className="text-xs font-mono text-foreground/50 uppercase tracking-widest block font-semibold">
            ✦ Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-foreground font-serif italic max-w-[26ch]">
            Let us build something worth remembering
          </h2>
          <p className="max-w-[58ch] text-[17px] leading-relaxed text-foreground/65">
            I am currently open to select freelance projects and product
            collaborations. The fastest way to reach me is email — I usually
            reply within a day.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <ContactButton />

            <ul className="flex flex-wrap items-center gap-2">
              {SOCIALS.map(social => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => sound.playPop()}
                    className="focus-ring group inline-flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/4 px-4 py-2 text-xs font-mono text-foreground/70 transition-colors duration-300 hover:border-foreground/30 hover:text-foreground"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

