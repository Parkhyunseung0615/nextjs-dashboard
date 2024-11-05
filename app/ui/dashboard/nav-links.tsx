'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from 'react';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  // const [index, setIndex] = useState(0);
  const pathName = usePathname();

  return (
    <>
      {links.map((link, i) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex bg-[#F9FAFB] rounded-md h-[48px] items-center px-3 gap-2 text-sm hover:bg-[#E0F2FE] hover:text-[#2F6FEB] sm:flex-grow sm:justify-center',
              { 'text-[#2F6FEB] bg-[#E0F2FE]': pathName === link.href }
              // { 'text-[#2F6FEB] bg-[#E0F2FE]': index === i }
            )}
            // onClick={() => setIndex(i)}
          >
            <LinkIcon className="w-6" />
            <p className="sm:hidden">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
