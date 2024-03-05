import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices
  } = await fetchCardData();

  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={totalPaidInvoices} type="collected" color='bg-blue-200'/>
      <Card title="Pending" value={totalPendingInvoices} type="pending" color='bg-red-200'/>
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" color='bg-green-200'/>
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
        color='bg-yellow-200'
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
  color,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
  color: 'bg-red-200' | 'bg-green-200' | 'bg-blue-200' | 'bg-yellow-200';
}) {
  const Icon = iconMap[type];

  return (
    <div className={`rounded-xl ${color} p-2 shadow-sm`}>
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
