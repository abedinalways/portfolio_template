import type { ReactNode } from 'react';
import { PortraitMorph } from './portrait-morph';

export function PortraitCard({
  src,
  hoverSrc,
  alt,
  className,
}: {
  src: string;
  hoverSrc?: string;
  alt: string;
  className?: string;
}): ReactNode {
  return (
    <div
      className={`border-foreground/8 bg-background relative aspect-square w-full overflow-hidden rounded-4xl border p-1.5 shadow-sm ${className ?? ''}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
        <PortraitMorph srcA={src} srcB={hoverSrc ?? src} alt={alt} />
      </div>
    </div>
  );
}

