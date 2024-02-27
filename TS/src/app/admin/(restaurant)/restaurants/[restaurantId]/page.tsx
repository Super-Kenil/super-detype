import Image from 'next/image'
import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FaStar } from 'react-icons/fa6'
import { getRestaurantById, getSellerById } from '@/helpers'
import { BreadcrumbAdmin } from '@/components'
import { RestaurantMenuDataTable } from '@/components/data-tables'
import CostAndUsageChart from './CostAndUsageChart'
import { avatar1Img, avatar2Img, restaurant1Img, restaurantBgImg } from '@/assets/data/images'
import { dishesData } from '@/assets/data'
import type { DishType } from '@/types/food'
import type { ColumnType } from '@/types/util'

type ParamsRestaurantId = {
  params: {
    restaurantId: string
  }
}

export const generateMetadata = async ({ params }: ParamsRestaurantId): Promise<Metadata> => {
  const restaurant = await getRestaurantById(Number(params.restaurantId)).then((restaurant) => restaurant)
  return { title: restaurant?.name ?? undefined }
}

const RestaurantDetails = async ({ params }: ParamsRestaurantId) => {
  const restaurant = await getRestaurantById(Number(params.restaurantId))

  if (!restaurant) notFound()
  const seller = await getSellerById(restaurant.seller_id)

  const columns: Array<ColumnType<DishType>> = [
    {
      key: 'name',
      name: 'Dish',
    },
    {
      key: 'category',
      name: 'Category',
    },
    {
      key: 'price',
      name: 'Price',
    },
    {
      key: 'id',
      name: 'Order ID',
    },
    {
      key: 'review',
      name: 'Rating',
    },
  ]

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title={restaurant?.name ?? 'Restaurant Detail'} subtitle="Restaurants" link="/admin/restaurants" />
        <div className="mb-6 rounded-lg border border-default-200 p-6">
          <Image src={restaurantBgImg} className="hidden w-full md:flex" alt="background" />
          <div className="flex items-center gap-3 md:-mt-14 md:items-end">
            <Image src={restaurant1Img} className="h-28 w-28 rounded-full bg-default-50" alt="restaurant" />
            <div>
              <h4 className="mb-1 text-base font-medium text-default-800">{restaurant?.name ?? 'Restaurant Detail'}</h4>
              <p className="text-sm text-default-600">Since 2013</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <CostAndUsageChart />

            <RestaurantMenuDataTable columns={columns} rows={dishesData} buttonLink="/admin/add-dish" buttonText="Add Dish" title="Menu" />
          </div>
          <div className="xl:col-span-1">
            <div className="mb-6 rounded-lg border border-default-200">
              <div className="border-b border-b-default-300 p-6">
                <h4 className="text-xl font-medium text-default-900">Seller Personal Detail</h4>
              </div>
              <div className="px-6 py-5">
                <table cellPadding={10}>
                  <tbody>
                    <tr>
                      <td className="text-start text-base font-medium">Owner Name:</td>
                      <td className="text-start">{seller?.name}</td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">Status:</td>
                      <td className="text-start">{seller?.status}</td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">Email:</td>
                      <td className="text-start">{seller?.email}</td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">Contact No:</td>
                      <td className="text-start">{seller?.contact_no}</td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">Orders:</td>
                      <td className="text-start">{seller?.orders}</td>
                    </tr>
                    <tr>
                      <td className="text-start text-base font-medium">Location:</td>
                      <td className="text-start">{seller?.location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-6 rounded-lg border border-default-200">
              <div className="border-b border-b-default-300 p-6">
                <h4 className="text-xl font-medium text-default-900">Customer Reviews</h4>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">5</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-full rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">4</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-4/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">3</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-3/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">2</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-2/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm">1</h5>
                    <div className="flex h-2 w-full overflow-hidden rounded-lg bg-default-100">
                      <div className="w-1/5 rounded-lg bg-yellow-400" />
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex justify-around">
                  <div className="text-center">
                    <h2 className="mb-1 text-2xl font-medium text-default-900">
                      4.5 <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                    </h2>
                    <p className="block text-xs text-default-600">452 Reviews</p>
                  </div>
                  <div className="text-center">
                    <h2 className="mb-1 text-2xl font-medium text-default-900">91%</h2>
                    <p className="block text-xs text-default-600">Recommended</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="mb-4 flex items-center gap-3">
                    <Image src={avatar1Img} className="h-11 w-11 rounded-full" alt="avatar" />
                    <div className="flex-grow">
                      <h4 className="mb-1 text-xs text-default-700">
                        Kianna Stanton <span className="text-default-600">🇺🇸US</span>
                      </h4>
                      <h4 className="text-xs text-green-400">Verified Buyer</h4>
                    </div>
                    <div>
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                    </div>
                  </div>
                  <h5 className="mb-2 text-sm text-default-600">SO DELICIOUS 🍯💯</h5>
                  <p className="text-sm text-default-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
                <div className="mb-4">
                  <div className="mb-4 flex items-center gap-3">
                    <Image src={avatar2Img} className="h-11 w-11 rounded-full" alt="avatar" />
                    <div className="flex-grow">
                      <h4 className="mb-1 text-xs text-default-700">
                        Ryan Rhiel Madsen <span className="text-default-600">🇺🇸US</span>
                      </h4>
                      <h4 className="text-xs text-green-400">Verified Buyer</h4>
                    </div>
                    <div>
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                      <FaStar size={20} className="inline-flex fill-yellow-400 align-middle text-yellow-400" />
                    </div>
                  </div>
                  <h5 className="mb-2 text-sm text-default-600">SO DELICIOUS 🍯💯</h5>
                  <p className="text-sm text-default-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetails
