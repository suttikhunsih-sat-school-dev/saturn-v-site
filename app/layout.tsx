import type { Metadata } from 'next';
import { fcLamoon } from './fonts';

import FloatingMenuWrapper from '../components/FloatingMenuWrapper';
// @ts-ignore: allow side-effect import of global CSS without type declarations
import './globals.css';

export const metadata: Metadata = {
  title: 'Saturn V',
  description: 'A saturday school project abount CSR',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fcLamoon.variable}>
      <body className={`${fcLamoon.variable} antialiased`}>
        <FloatingMenuWrapper />
        {children}
      </body>
    </html>
  );
}
