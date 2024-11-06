import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';

export default async function Dashboard() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h2 className={`${lusitana.className} text-[24px] mb-4 sm:text-[20px]`}>
        Dashboard
      </h2>
      <div className="grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
    </main>
  );
}
