import CardWrapper from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Suspense } from 'react';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';

export default async function Dashboard() {
  return (
    <main>
      <h2 className={`${lusitana.className} text-[24px] mb-4 sm:text-[20px]`}>
        Dashboard
      </h2>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="flex mt-6 gap-6 md:flex-wrap pb-[48px]">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
