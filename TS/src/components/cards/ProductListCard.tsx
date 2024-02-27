import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { currentCurrency } from '@/common'
import { calculatedPrice } from '@/helpers'
import type { DishType } from '@/types/food'
const AddToFavouriteButton = dynamic(() => import('../shopping-interactivity/ProductWishlistToggler'), { ssr: false })
const AddToCartButton = dynamic(() => import('../shopping-interactivity/AddToCartButton'), { ssr: false })
const ProductQuantityToggler = dynamic(() => import('../shopping-interactivity/ProductQuantityToggler'), { ssr: false })

const ProductListCard = ({ dish }: { dish: DishType }) => {
  const { images, name, id, price, sale, review } = dish

  const discountedPrice = calculatedPrice(dish)

  return (
    <div className="rounded-lg border border-default-200 p-4 transition-all duration-300 hover:border-primary dark:hover:shadow-[0px_0px_16px_0px_rgba(245,130,32,0.50)]">
      <div className="relative flex flex-col justify-center gap-4 md:flex-row md:items-center">
        <div className="shrink-0">
          <div className="h-full w-full">
            <Image src={images[0]} alt={name} width={273} height={212} className="h-full w-full" />
          </div>
        </div>
        <div className="flex flex-grow items-center gap-4">
          <div className="grow">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <Link href={`/dishes/${id}`} className="line-clamp-1 text-2xl font-semibold text-default-800 after:absolute after:inset-0">
                  {name}
                </Link>

                <AddToFavouriteButton dish={dish} />
              </div>
              <p className="mb-6 line-clamp-2 max-w-2xl text-base text-default-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam
              </p>
              <div className="mb-6 flex flex-wrap items-center gap-4 md:flex-nowrap">
                <AddToCartButton dish={dish} className="w-fit" />

                <ProductQuantityToggler dish={dish} size="medium" />
              </div>
              <div className="flex items-center gap-4">
                <h4 className="text-lg font-semibold text-primary sm:text-2xl">
                  {currentCurrency}
                  {discountedPrice}{' '}
                  {sale && (
                    <span className="align-baseline text-xl font-medium text-default-400 line-through">
                      {currentCurrency}
                      {price}
                    </span>
                  )}
                </h4>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {Array.from(new Array(Math.floor(review.stars))).map((_star, idx) => (
                      <FaStar key={idx} size={16} className="text-yellow-400" />
                    ))}
                    {!Number.isInteger(review.stars) && <FaStarHalfStroke size={16} className="text-yellow-400" />}

                    {review.stars < 5 &&
                      Array.from(new Array(5 - Math.ceil(review.stars))).map((_val, idx) => (
                        <FaStar key={idx} size={16} className="text-default-400" />
                      ))}
                  </div>
                  <h6 className="mt-1 text-xs text-default-500">({review.count})</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListCard
