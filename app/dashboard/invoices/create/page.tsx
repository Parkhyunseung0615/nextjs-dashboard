import { fetchCustomers } from '@/app/lib/data';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Form from '@/app/ui/invoices/create-form';

export default async function CreatePage() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invocies', href: '/dashboard/invoices' },
          {
            label: 'Create Invocies',
            href: '/dashboard/invocies/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
