import type { ReactNode } from 'react';

import { HeroCtas } from './hero-ctas';
import { PortraitCard } from './portrait-card';
import { TimeGreeting } from './time-greeting';
import { IntroLine } from './intro-line';
import { FadeIn, ScaleUnblur } from '../ui/motion-premitive';

const PORTRAIT_SRC = '/josh.webp';
const PORTRAIT_HOVER_SRC = '/josh_wave.webp';

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-8">
          <FadeIn className="flex flex-col gap-4">
            <TimeGreeting />
            <IntroLine />

            <h1 className="text-foreground text-[2.75rem] leading-[1.05] font-medium tracking-tight md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block whitespace-nowrap">
                Frontend engineer &
              </span>
              <span className="block whitespace-nowrap">AI enthusiast</span>
            </h1>

            <p className="text-foreground/65 max-w-[34ch] text-[18px] leading-[1.4] tracking-tight">
              I build modern, high-performance web experiences that feel
              intuitive, polished, and effortless. Focused on thoughtful
              interfaces, clean architecture, and turning complex ideas into
              simple digital experiences.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="flex justify-stretch md:justify-end">
            <PortraitCard
              src={PORTRAIT_SRC}
              hoverSrc={PORTRAIT_HOVER_SRC}
              alt="Josh portrait"
              className="md:max-w-105"
            />
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
