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
  title: 'Frontend Mentor - NFT preview card component',
  description:
    'This website is a solution for the NFT preview card component challenge on Frontend Mentor. It is built with Next.js and Tailwind CSS. Coded by Arda Eker.',
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
    title: 'Frontend Mentor - NFT preview card component',
    description:
      'This website is a solution to the NFT preview card component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - NFT preview card component',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://nft-preview-card-component-dusky-gamma.vercel.app',
  },
  icons: {
    icon: '/icon.png',
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
