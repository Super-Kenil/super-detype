import Link from 'next/link'
import { type Metadata } from 'next'
import dynamic from 'next/dynamic'
import ManageOfferCard from './ManageOfferCard'
import { BreadcrumbAdmin } from '@/components'
import { NewMenuCard } from '@/components/cards'
const OrderCard = dynamic(() => import('./OrderCard'), { ssr: false })

import { bagIconImg, specialOfferIconImg } from '@/assets/data/images'
import { dishesData } from '@/assets/data'
import SpacialMenuCard from './SpacialMenuCard'
import AddNewFoodCard from './AddNewFoodCard'
import UpcomingNewMenuCard from './UpcomingNewMenuCard'

export const metadata: Metadata = {
  title: 'Manage',
}

const Manage = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Manage" link="/admin/dashboard" subtitle="Admin" />
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
          <div className="xl:col-span-5">
            <div className="space-y-6">
              <div className="rounded-lg border border-default-200">
                <div className="p-5">
                  <h3 className="mb-4 text-lg font-semibold text-default-800">Offer Zone</h3>
                  <div className="space-y-4">
                    <ManageOfferCard offerTitle="Up to 50% OFF, Flat Discount and other great offers" variant="cyan" image={bagIconImg} />
                    <ManageOfferCard offerTitle="Up to 50% OFF, Flat Discount and other great offers" variant="pink" image={specialOfferIconImg} />
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border border-default-200">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-semibold text-default-800">Upcoming New Menu</h3>
                </div>
                <div className="custom-scroll h-[40rem] overflow-y-scroll">
                  <div className="space-y-4 px-6 pb-6">
                    {dishesData.map((dish) => (
                      <UpcomingNewMenuCard key={dish.id} product={dish} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-4">
            <div className="rounded-lg border border-default-200">
              <div className="p-5">
                <h3 className="mb-4 text-lg font-semibold text-default-800">New Menu</h3>
                <div className="space-y-4">
                  {dishesData.map((dish, idx) => {
                    return <NewMenuCard key={idx} dish={dish} />
                  })}
                  <div className="text-end">
                    <Link
                      href="/admin/add-dish"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-10 py-4 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
                    >
                      Add Menu items
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-3">
            <div className="space-y-4">
              <OrderCard color="#009400" change={34} changeType="Increase Orders" title="New Order" />
              <OrderCard color="#D40000" change={45} changeType="Decrease Order" title="Cancelled Orders" />
              <AddNewFoodCard />
              <SpacialMenuCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Manage
