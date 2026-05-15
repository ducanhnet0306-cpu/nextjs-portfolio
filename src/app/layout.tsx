import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/providers/ThemeProvider';
import './globals.css';

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

export const metadata: Metadata = {
  title: 'Trần Đức Anh – Fullstack Developer',
  description:
    'Portfolio của Trần Đức Anh – Fullstack Developer chuyên .NET, React Native và Next.js. Kinh nghiệm xây dựng sản phẩm quy mô lớn, tối ưu hiệu năng và ứng dụng AI tools vào workflow.',
  keywords: [
    'Trần Đức Anh',
    'Fullstack Developer',
    '.NET Developer',
    'React Native',
    'Next.js',
    'Portfolio',
    'Vietnam Developer',
  ],
  authors: [{ name: 'Trần Đức Anh', url: 'mailto:ducanh.net0306@gmail.com' }],
  openGraph: {
    title: 'Trần Đức Anh – Fullstack Developer',
    description:
      'Fullstack Developer với kinh nghiệm thực chiến trong .NET, React Native và Next.js.',
    type: 'website',
    locale: 'vi_VN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
