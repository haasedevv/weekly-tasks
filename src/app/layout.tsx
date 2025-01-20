import '@/assets/styles/reset.css';
import '@/assets/styles/index.css';
import '@/assets/styles/tailwind.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tarefas semanais',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
