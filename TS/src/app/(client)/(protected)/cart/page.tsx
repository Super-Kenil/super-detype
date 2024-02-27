import Link from 'next/link'
import { type Metadata } from 'next'
import { Breadcrumb } from '@/components'
import CouponCodeForm from './CouponCodeForm'
import AllCartItems from './AllCartItems'
import CartTotal from './CartTotal'

export const metadata: Metadata = {
  title: 'Cart',
}

const Cart = () => {
  return (
    <>
      <Breadcrumb title="Cart" />
      <section className="py-6 lg:py-10">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="col-span-1 lg:col-span-2">
              <div className="rounded-lg border border-default-200">
                <div className="border-b border-default-200 px-6 py-5">
                  <h4 className="text-lg font-medium text-default-800">Shopping Cart</h4>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <div className="-m-1.5 overflow-x-auto">
                    <div className="inline-block min-w-full p-1.5 align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full divide-y divide-default-200">
                          <thead className="bg-default-400/10">
                            <tr>
                              <th scope="col" className="min-w-[14rem] px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                                Products
                              </th>
                              <th scope="col" className="px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                                Price
                              </th>
                              <th scope="col" className="px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                                Quantity
                              </th>
                              <th scope="col" className="px-5 py-3 text-center text-xs font-medium uppercase text-default-500">
                                Sub-Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-default-200">
                            <AllCartItems />
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-default-200 px-6 py-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Link
                      href="/dishes"
                      className="inline-flex items-center justify-center rounded-lg border border-primary px-5 py-3 text-center text-sm font-medium text-primary shadow-sm transition-all duration-500 hover:bg-primary hover:text-white"
                    >
                      Shop More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <CartTotal />

              <CouponCodeForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
