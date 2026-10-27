import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

const displayFont = localFont({
  src: [
    {
      path: './fonts/playfair-display.woff2',
      style: 'normal',
      weight: '400 900',
    },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: 'Yoseph Ayalew — Full-Stack Software Engineer',
  description: 'Full-Stack Software Engineer specializing in Java, Vert.x, Angular, React, and PostgreSQL at eTech SC. Developing high-performance enterprise eHealth and SACCO systems.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
  },
  keywords: [
    'Yoseph Ayalew',
    'Full-Stack Software Engineer',
    'Java Vert.x Developer',
    'Angular Developer',
    'PostgreSQL',
    'React Developer',
    'eTech SC',
  ],
  authors: [{ name: 'Yoseph Ayalew' }],
};

export const viewport = {
  themeColor: '#065F46',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${displayFont.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
