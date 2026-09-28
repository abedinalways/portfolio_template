import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AboutSection } from '@/components/about/about-section';
import { ContactSection } from '@/components/contact/contact-section';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description:
    'Frontend engineer and AI enthusiast focused on interface craft, performance budgets and systems thinking.',
  path: '/about',
});

export default function AboutPage(): ReactNode {
  return (
    <main className="pt-24 sm:pt-32">
      <AboutSection />
      <ContactSection />
    </main>
  );
}

