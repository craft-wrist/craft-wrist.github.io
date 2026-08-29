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
  openGraph: {
    title: 'CRAFT-W — A Direct-drive Two-DoF Wrist Extension',
    description:
      'A concentric two-DoF wrist extension for the tendon-driven CRAFT Hand.',
    images: ['/og.png'],
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
        {children}
      </body>
    </html>
  );
}
