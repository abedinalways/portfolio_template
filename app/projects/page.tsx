import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ProjectsSection } from '@/components/projects/projects-section';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description:
    'Selected work across WebGL graphics, AI systems and fullstack interface engineering.',
  path: '/projects',
});

export default function ProjectsPage(): ReactNode {
  return (
    <main className="pt-24 sm:pt-32">
      <ProjectsSection />
    </main>
  );
}

