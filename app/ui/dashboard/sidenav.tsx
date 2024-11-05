import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex flex-col h-full px-2 py-4">
      <Link
        className="flex items-end h-[160px] bg-[#2F6FEB] rounded-md p-4 sm:h-[80px]"
        href="/"
      >
        <AcmeLogo />
      </Link>
      <div className="flex flex-col gap-2 mt-2 flex-grow sm:flex-row">
        <NavLinks />
        <div className="flex-grow bg-[#F9FAFB] sm:hidden"></div>
        <form>
          <button
            type="submit"
            className="flex bg-[#F9FAFB] w-full h-[48px] rounded-md items-center px-3 gap-2 text-[14px] hover:bg-[#E0F2FE] hover:text-[#2F6FEB]"
          >
            <PowerIcon className="w-6" />
            <span className="sm:hidden">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
