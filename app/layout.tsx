import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://craft-wrist.github.io'),
  title: 'CRAFT-W — A Direct-drive Two-DoF Wrist Extension',
  description:
    'CRAFT-W is a concentric two-DoF wrist extension for the tendon-driven CRAFT Hand, designed for local orientation control and measurable wrist–finger tendon coupling.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CRAFT-W — A Direct-drive Two-DoF Wrist Extension',
    description:
      'A concentric two-DoF wrist extension for the tendon-driven CRAFT Hand.',
    url: 'https://craft-wrist.github.io/',
    siteName: 'CRAFT-W',
    images: [
      {
        url: '/og.png',
        width: 1800,
        height: 1416,
        alt: 'CRAFT-W: CAD model and assembled prototype of a two-DoF wrist extension for the CRAFT Hand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRAFT-W — A Direct-drive Two-DoF Wrist Extension',
    description:
      'A concentric two-DoF wrist extension for the tendon-driven CRAFT Hand.',
    images: ['/og.png'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Project',
  name: 'CRAFT-W: A Direct-drive Two-DoF Wrist Extension for the CRAFT Hand',
  description:
    'A concentric two-DoF wrist extension for the tendon-driven CRAFT Hand, providing local hand orientation for confined-space manipulation without modifying the hand.',
  url: 'https://craft-wrist.github.io/',
  isAccessibleForFree: true,
  creator: [
    { '@type': 'Person', name: 'Yujie Pang' },
    { '@type': 'Person', name: 'Sadman Sakib' },
    { '@type': 'Person', name: 'Mohammad Abdullah Al Faruque' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
