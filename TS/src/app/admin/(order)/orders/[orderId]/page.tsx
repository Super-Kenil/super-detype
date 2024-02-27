import { type Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { LuDot } from 'react-icons/lu'
import { BreadcrumbAdmin, OrderDetailsCard, OrderDetailsDataTable } from '@/components'
import { getOrderHistoryById } from '@/helpers'
import TotalPayment from './TotalPayment'
import DeliveryDetail from './DeliveryDetail'
import OrderProgress from './OrderProgress'
import LogisticsDetails from './LogisticsDetails'
import { dishesData } from '@/assets/data'
import type { ColumnType } from '@/types/util'
import type { DishType } from '@/types/food'

type ParamsOrderId = {
  params: {
    orderId: string
  }
}

export const metadata: Metadata = {
  title: 'Order Details',
}

const OrderDetails = async ({ params }: ParamsOrderId) => {
  const order = await getOrderHistoryById('#' + params.orderId)

  if (!order) notFound()

  const columns: Array<ColumnType<DishType>> = [
    {
      key: 'name',
      name: 'Dish',
    },
    {
      key: 'price',
      name: 'Price',
    },
    {
      key: 'quantity',
      name: 'Quantity',
    },
  ]
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Order Details" subtitle="Order" link="/admin/orders" />
        <div className="rounded-lg border border-default-200">
          <div className="flex flex-wrap items-center gap-3 border-b border-default-200 p-6">
            <h4 className="text-xl font-medium text-default-900">Order {order.id.toUpperCase()}</h4>
            <div className="flex flex-wrap items-center gap-3">
              <LuDot />
              <h4 className="text-sm text-default-600">September 23, 2023</h4>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <LuDot />
              <h4 className="text-sm text-default-600">3 Products</h4>
            </div>
            <Link href="/admin/orders" className="ms-auto text-base font-medium text-primary">
              Back to List
            </Link>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <OrderDetailsCard
                title="Billing Address"
                name="Jaylon Calzoni"
                address=" 2123 Parker st. Allentown, New Mexico 123456"
                email="jaylon.calzoni@mail.com"
                phoneNo="(123) 456-7890"
              />
              <OrderDetailsCard
                title="Shipping Address"
                name="Ryan Westervelt"
                address="2123 Parker st. Allentown, New Mexico 123456"
                email="ryanwestenvelt@mail.com"
                phoneNo="(123) 456-7890"
              />
              <TotalPayment />
              <DeliveryDetail />
              <div className="md:col-span-2 xl:col-span-3">
                <OrderProgress />

                <OrderDetailsDataTable columns={columns} rows={dishesData} />
              </div>
              <div className="md:col-span-2 xl:col-span-1">
                <LogisticsDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
