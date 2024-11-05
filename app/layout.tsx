import '@/app/ui/global.css';
import { pretendard } from '@/app/ui/fonts';
import localFont from 'next/font/local';

export default function RootLayout({
  children,
}: {
  // ReactNode : 여러가지를 모두 포함하는 타입 (태그 등)
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
