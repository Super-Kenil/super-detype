import { type Metadata } from 'next'
import type { SellerType } from '@/types/food'
import type { ColumnType } from '@/types/util'
import { BreadcrumbAdmin, CustomerDataTable } from '@/components'
import { sellersData } from '@/assets/data'

export const metadata: Metadata = {
  title: 'Sellers List',
}

const SellerList = () => {
  const columns: Array<ColumnType<SellerType>> = [
    {
      key: 'name',
      name: 'Customer Name',
    },
    {
      key: 'email',
      name: 'Email',
    },
    {
      key: 'contact_no',
      name: 'Phone',
    },
    {
      key: 'orders',
      name: 'Orders',
    },
    {
      key: 'order_total',
      name: 'Order Total',
    },
    {
      key: 'joining_date',
      name: 'Customer Since',
    },
    {
      key: 'status',
      name: 'Status',
    },
  ]
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Sellers List" subtitle="Sellers" />
        <CustomerDataTable<SellerType>
          rows={sellersData}
          columns={columns}
          title="Sellers"
          buttonText="Add new Sellers"
          buttonLink="/admin/add-seller"
        />
      </div>
    </div>
  )
}

export default SellerList
