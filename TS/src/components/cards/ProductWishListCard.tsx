import Image from 'next/image'
import dynamic from 'next/dynamic'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import type { DishType } from '@/types/food'
import { calculatedPrice, getRestaurantById } from '@/helpers'
import { currentCurrency } from '@/common'
const AddToCartButton = dynamic(() => import('@/components/shopping-interactivity/AddToCartButton'))
const ProductWishlistToggler = dynamic(() => import('@/components/shopping-interactivity/ProductWishlistToggler'))

const ProductWishListCard = ({ dish }: { dish: DishType }) => {
  const { images, name, price, review, restaurant_id, restaurant } = dish


  const discountedPrice = calculatedPrice(dish)

  return (
    <div className="grid grid-cols-3 items-end px-4 py-4 sm:items-center">
      <div className="col-span-2 lg:col-span-1">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <Image src={images[0]} width={112} height={112} className="me-2 h-28 w-28 place-self-end sm:place-self-start lg:me-4" alt="sushi" />
          <div className="w-2/3 md:w-auto">
            <p className="mb-2 text-xs font-medium text-primary">{restaurant?.name ?? ""}</p>
            <h4 className="mb-2 line-clamp-1 text-xl font-semibold text-default-800">{name}</h4>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-2 lg:hidden">
                  <span className="rounded-full bg-primary p-1">
                    <FaStar size={12} className="fill-white text-white" />
                  </span>
                  <span className="from-inherit text-sm text-default-950">{review.stars}</span>
                </span>
                <div className="hidden gap-1.5 lg:flex">
                  {Array.from(new Array(Math.floor(review.stars))).map((_star, idx) => (
                    <FaStar key={idx} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  {!Number.isInteger(review.stars) && <FaStarHalfStroke size={20} className="text-yellow-400" />}
                  {review.stars < 5 &&
                    Array.from(new Array(5 - Math.ceil(review.stars))).map((_val, idx) => (
                      <FaStar key={idx} size={20} className="text-default-400" />
                    ))}
                </div>
              </div>
              <h6 className="mt-1 text-sm font-medium text-default-500">({review.count})</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center">
        <div className="flex flex-col items-end lg:text-end">
          <h4 className="inline-block text-2xl font-medium text-default-500">
            {currentCurrency}
            {discountedPrice}
          </h4>
          <h4 className="inline-block text-base font-medium text-default-500 line-through">
            {currentCurrency}
            {price}
          </h4>
        </div>
      </div>
      <div className="col-span-3 mt-4 lg:col-span-1 lg:mt-0">
        <div className="flex justify-center gap-5 lg:flex-col lg:items-end">
          <ProductWishlistToggler dish={dish} />
          <AddToCartButton dish={dish} />
        </div>
      </div>
    </div>
  )
}

export default ProductWishListCard
