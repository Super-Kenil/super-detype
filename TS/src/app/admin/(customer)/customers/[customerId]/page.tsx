import dynamic from 'next/dynamic'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BreadcrumbAdmin, OrderDataTable } from '@/components'
import { orderRows } from '@/app/admin/(order)/orders/page'
import { getSellerById } from '@/helpers'
import type { ColumnType } from '@/types/util'
import type { OrderType } from '@/types/other'
const PersonDetailsCard = dynamic(() => import('@/components/cards/PersonDetailsCard'))

type ParamsCustomerId = {
  params: {
    customerId: string
  }
}

export const generateMetadata = async ({ params }: ParamsCustomerId): Promise<Metadata> => {
  const seller = await getSellerById(Number(params.customerId)).then((seller) => seller)
  return { title: seller?.name ?? undefined }
}

const CustomerDetails = async ({ params }: ParamsCustomerId) => {
  const seller = await getSellerById(Number(params.customerId))

  if (!seller) notFound()

  const columns: Array<ColumnType<OrderType>> = [
    {
      key: 'date',
      name: 'Date',
    },
    {
      key: 'id',
      name: 'Order ID',
    },
    {
      key: 'dish_id',
      name: 'Dish',
    },
    {
      key: 'amount',
      name: 'Amount',
    },
    {
      key: 'status',
      name: 'Status',
    },
  ]

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Customers Details" link="/admin/customers" subtitle="Customers" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <PersonDetailsCard seller={seller} />
          </div>
          <div className="lg:col-span-2">
            <OrderDataTable<OrderType> title="Customer Order history" columns={columns} rows={orderRows} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerDetails
