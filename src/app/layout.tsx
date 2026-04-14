import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';

export const metadata: Metadata = {
  title: 'Bizing - Business Attitude',
  description: 'Bizing - Business Attitude Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '"Inter", "Roboto", "Helvetica Neue", Arial, sans-serif' }}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
