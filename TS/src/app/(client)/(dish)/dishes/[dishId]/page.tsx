import { type Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { FaCircle, FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { Breadcrumb, DishDetailsSwiper, DishRatingRepresentation, ProductDetailView, ProductGridCard } from '@/components'
import { cn } from '@/utils'
import { getDishById } from '@/helpers'
import { consumerReviews, dishesData } from '@/assets/data'

type ParamsDishId = {
  params: {
    dishId: string
  }
}

export const generateMetadata = async ({ params }: ParamsDishId): Promise<Metadata> => {
  const dish = await getDishById(Number(params.dishId))
  return { title: dish?.name ?? undefined }
}

const ProductDetail = async ({ params }: ParamsDishId) => {
  const dish = await getDishById(Number(params.dishId))

  if (!dish) notFound()

  return (
    <>
      <Breadcrumb title={dish.name} subtitle="Details" />

      <section className="py-6 lg:py-10">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <DishDetailsSwiper images={dish.images} />

            <ProductDetailView dish={dish} showButtons />
          </div>
        </div>
      </section>
      <section className="py-6 lg:py-10">
        <div className="container">
          <h4 className="mb-4 text-xl font-semibold text-default-800">You may also like</h4>
          <div className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {dishesData.slice(0, 4).map((dish, idx) => (
              <ProductGridCard key={idx} dish={dish} />
            ))}
          </div>

          <DishRatingRepresentation />

          <div className="pt-10">
            <h4 className="text-base font-medium text-default-800">Consumer Review</h4>

            {consumerReviews.map((review, idx) => (
              <div key={review.id} className={cn('py-5', consumerReviews.length !== idx + 1 && 'border-b border-default-200')}>
                <div className="mb-3 flex items-center">
                  <Image src={review.reviewer_image} alt="avatar" height={48} width={48} className="me-4 h-12 w-12 rounded-full" />
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <h4 className="text-sm font-medium text-default-800">{review.reviewer_name}</h4>
                      <FaCircle size={5} className="text-default-400" />
                      <h4 className="text-sm font-medium text-default-400">Just now</h4>
                    </div>
                    <div className="flex gap-1.5">
                      {Array.from(new Array(Math.floor(review.stars))).map((_val, idx) => (
                        <FaStar key={idx} className="text-base text-yellow-400" />
                      ))}
                      {!Number.isInteger(review.stars) && <FaStarHalfStroke size={18} className="text-yellow-400" />}
                      {review.stars < 5 &&
                        Array.from(new Array(5 - Math.ceil(review.stars))).map((_val, idx) => (
                          <FaStar key={idx} size={16} className="text-default-200" />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-default-600">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail
