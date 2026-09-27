
import type { Metadata, Viewport } from 'next';
import { Caveat, Fraunces, Geist, Geist_Mono } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import { Providers } from '@/components/layouts/Providers';
import { Nav } from '@/components/nav/Navbar';
import { baseMetadata } from '@/lib/metadata';
import { SkipToContent } from '@/components/layouts/skip-to-content';
import { PageBackdrop } from '@/components/layouts/page-backdrop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  axes: ['opsz', 'SOFT'],
  display: 'swap',
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${caveat.variable} min-h-screen bg-background font-sans text-foreground antialiased`}
      >
        <Providers>
          
          {/* <SkipToContent /> */}
          <PageBackdrop /> 
          <Nav />
          {children}
         
        </Providers>
      </body>
    </html>
  );
}
