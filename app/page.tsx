'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
// import heroPc from '@/public/hero-desktop.png';

// export default - 페이지 별로 함수명을 변경하는 것이 좋음
export default function HomePage() {
  return (
    <main className="flex flex-col p-[24px] h-screen gap-4">
      {/* 상단 로고 영역 */}
      <div className="h-[208px] bg-[rgb(0,112,243)] rounded-lg flex items-end p-4 sm:h-[80px]">
        <AcmeLogo />
      </div>
      {/* 하단 컨텐츠 영역 */}
      <div className="flex flex-grow gap-4 mt-4 sm:flex-col">
        {/* 좌측 텍스트 영역, 로그인 버튼 */}
        <div className="flex flex-col bg-[#F9FAFB] w-2/5 rounded-lg p-[80px] justify-center items-start gap-6 sm:w-full sm:px-[24px] sm:py-[40px]">
          <p className={`${montserrat.className} text-[30px] sm:text-[20px]`}>
            <strong className="text-point-color1">Welcome to Acme.</strong> This
            is the example for the{' '}
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              className="text-point-color2 font-bold"
            >
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="h-[48px] flex items-center bg-point-color2 p-[24px] text-[white] rounded-lg gap-[20px]"
          >
            Log in
            <ArrowRightIcon className="w-[24px]" />
          </Link>
        </div>
        {/* 우측 이미지 영역 */}
        <div className="w-3/5 px-[112px] py-[48px] flex items-center justify-center sm:w-full sm:p-[24px]">
          <Image
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard project showing desktop version"
            width={1000}
            height={760}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN88h8AAs0B5QWO2loAAAAASUVORK5CYII="
            className="sm:hidden"
          />
          <Image
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard project showing desktop version"
            width={560}
            height={620}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN88h8AAs0B5QWO2loAAAAASUVORK5CYII="
            className="hidden sm:block"
          />
          {/* <img src={heroPc.src} alt="" /> */}
        </div>
      </div>
    </main>
  );
}
