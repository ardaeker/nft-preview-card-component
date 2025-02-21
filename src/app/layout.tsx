import './globals.css';

import { Outfit } from 'next/font/google';
import type { Metadata, Viewport } from 'next';

const outfit = Outfit({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d192c',
};

export const metadata: Metadata = {
  title: 'Arda Eker - NFT preview card component',
  description:
    'A responsive NFT preview card with semantic HTML and metadata optimization.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'NFT preview card component',
    'NFT preview card component solution',
    'NFT preview card component challenge',
    'NFT preview card component challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL(
    'https://nft-preview-card-component-dusky-gamma.vercel.app/',
  ),
  openGraph: {
    title: 'Arda Eker - NFT preview card component',
    description:
      'A responsive NFT preview card with semantic HTML and metadata optimization.',
    siteName: 'Arda Eker - NFT preview card component',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://nft-preview-card-component-dusky-gamma.vercel.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        {children}
      </body>
    </html>
  );
}
