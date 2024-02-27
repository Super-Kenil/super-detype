import Image from 'next/image'
import Link from 'next/link'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { getSellerById } from '@/helpers'
import type { RestaurantType } from '@/types/food'

const RestaurantListCard = async ({ restaurant }: { restaurant: RestaurantType }) => {
  const { contact_no, address, email, logo, total_dishes, total_sales, name, seller_id, id } = restaurant

  const seller = await getSellerById(seller_id).then((seller) => seller)

  return (
    <div className="relative rounded-lg border border-default-200 p-6">
      <Image src={logo} width={56} height={56} className="mx-auto mb-4 h-14 w-14" alt="restaurant" />
      <h4 className="text-center text-base font-medium uppercase text-default-900">{name}</h4>
      {seller && <h4 className="mb-10 text-center text-base font-medium text-default-600">{seller.name}</h4>}
      <div className="mb-8 flex justify-around">
        <div className="text-center">
          <h4 className="mb-2.5 text-lg font-medium text-primary">{total_dishes}</h4>
          <h5 className="text-sm text-default-800">Total Product</h5>
        </div>
        <div className="border-s border-default-200" />
        <div className="text-center">
          <h4 className="mb-2.5 text-lg font-medium text-primary">{total_sales}</h4>
          <h5 className="text-sm text-default-800">Total Sales</h5>
        </div>
      </div>
      <div className="mb-6 space-y-5">
        <div className="flex gap-3">
          <div className="flex-shrink">
            <LuMapPin size={20} className="text-default-800" />
          </div>
          <p className="d text-sm text-default-700">{address}</p>
        </div>
        <div className="flex gap-3">
          <div className="flex-shrink">
            <LuMail size={20} className="text-default-800" />
          </div>
          <p className="d text-sm text-default-700">{email}</p>
        </div>
        <div className="flex gap-3">
          <div className="flex-shrink">
            <LuPhone size={20} className="text-default-800" />
          </div>
          <p className="d text-sm text-default-700">{contact_no}</p>
        </div>
      </div>
      <div className="text-center">
        <Link
          href={`/admin/restaurants/${id}`}
          className="inline-flex rounded-lg bg-primary px-8 py-2.5 font-medium text-white transition-all hover:bg-primary-500"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

export default RestaurantListCard
