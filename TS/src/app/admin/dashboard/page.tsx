import Link from 'next/link'
import Image from 'next/image'
import { type Metadata } from 'next'
import { LuChevronRight } from 'react-icons/lu'
import { cn, toAlphaNumber } from '@/utils'
import { BestSellingProductCard, BreadcrumbAdmin, OrderDataTable } from '@/components'
import { orderRows } from '../(order)/orders/page'
import { analyticsOverviewData, categoriesData, dishesData } from '@/assets/data'
import type { OrderType } from '@/types/other'
import type { ColumnType } from '@/types/util'

export const metadata: Metadata = {
  title: 'Dashboard',
}

const Dashboard = () => {
  const columns: Array<ColumnType<OrderType>> = [
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
      name: 'Total',
    },
  ]

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Dashboard" subtitle="Admin" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-6">
          {analyticsOverviewData.map((overview, idx) => {
            const changeColor = overview.change.split(' ')[1] == 'Increase' ? 'text-green-500' : 'text-red-500'
            return (
              <div
                key={overview.name + idx}
                className="flex flex-col justify-between overflow-hidden rounded-lg border border-default-200 p-4 text-center transition-all duration-300 hover:border-primary"
              >
                <h4 className="mb-2 text-2xl font-semibold text-primary">{toAlphaNumber(overview.amount)}</h4>
                <h6 className="mb-4 text-lg font-medium text-default-950">{overview.name}</h6>
                <p className={cn('text-sm font-medium', changeColor)}>{overview.change}</p>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-2">
          <div className="pb-10">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-default-950">Category</h3>
                <Link href="/dishes" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-500">
                  View all <LuChevronRight size={20} />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                {categoriesData.slice(0, 4).map((category) => (
                  <Link
                    key={category.id}
                    href=""
                    className="space-y-4 rounded-lg border border-default-200 py-4 text-center transition-colors duration-300 hover:border-primary"
                  >
                    <div>
                      <Image src={category.image} width={56} height={56} className="mx-auto h-full max-w-full" alt="tea" />
                    </div>
                    <h5 className="text-lg text-default-600">{category.name}</h5>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-10">
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-default-950">Best Selling Products</h3>
                <Link href="/dishes" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-500">
                  View all <LuChevronRight size={20} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                {dishesData
                  .filter((dish) => dish.is_popular)
                  .slice(0, 3)
                  .map((dish) => (
                    <BestSellingProductCard key={dish.id} product={dish} />
                  ))}
              </div>
            </div>
          </div>

          <div className="pb-10 ">
            <OrderDataTable<OrderType> columns={columns} rows={orderRows.slice(0, 6)} title="Recent Orders" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
