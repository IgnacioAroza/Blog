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
  title: 'Ignacio Aroza - Full Stack Developer',
  description: 'Blog personal de Ignacio Aroza, Full Stack Developer especializado en JavaScript/TypeScript, React, Node.js y Clean Architecture.',
  keywords: ['Ignacio Aroza', 'Full Stack Developer', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Clean Architecture'],
  authors: [{ name: 'Ignacio Aroza', url: 'https://portfolio-eifk.onrender.com/' }],
  creator: 'Ignacio Aroza',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Ignacio Aroza - Full Stack Developer',
    description: 'Blog personal sobre desarrollo web, JavaScript, TypeScript y arquitecturas escalables.',
    url: 'https://ignacioaroza.dev',
    siteName: 'Ignacio Aroza Blog',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Ignacio Aroza - Full Stack Developer',
    description: 'Blog personal sobre desarrollo web y tecnología.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
