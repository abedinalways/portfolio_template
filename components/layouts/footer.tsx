import type { ReactNode } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/lib/metadata';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
] as const;

export function Footer(): ReactNode {
  return (
    <footer className="relative w-full border-t border-foreground/10 py-10 font-sans">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-10">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-foreground/50">
            ✦ {siteConfig.name}
          </span>
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} — Built with Next.js and Tailwind CSS.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-5 text-xs font-mono text-foreground/60">
            {FOOTER_LINKS.map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="focus-ring rounded-sm transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

