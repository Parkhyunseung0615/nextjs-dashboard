import '@/app/ui/global.css';
import { pretendard } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  // Acme Dashboard 기본 제목으로 사용, 서브페이지 제목있을 경우 템플릿사용, %s에 서브페이지 제목 들어옴
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

export default function RootLayout({
  children,
}: {
  // ReactNode : 여러가지를 모두 포함하는 타입 (태그 등)
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
