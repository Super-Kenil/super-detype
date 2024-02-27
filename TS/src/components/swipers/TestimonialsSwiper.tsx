'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { LuQuote } from 'react-icons/lu'
import { avatar1Img, avatar2Img, avatar3Img, avatar4Img } from '@/assets/data'
import type { Swiper as SwiperType } from 'swiper'
import type { TestimonialType } from '@/types/other'

const TestimonialsSwiper = ({ reviews }: { reviews: TestimonialType[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  return (
    <div>
      <span className="mb-6 inline-flex rounded-full bg-primary/20 px-4 py-2 text-sm text-primary">Testimonials</span>
      <h2 className="mb-4 max-w-xl text-3xl font-semibold text-default-900">What They Say About Us.</h2>
      <div className="product-img-slider sticky-side-div">
        <Swiper
          modules={[Thumbs]}
          spaceBetween={24}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="clients-testimonial p-2"
          wrapperClass="mb-4"
          loop
        >
          {reviews.map((review) => {
            return (
              <SwiperSlide key={review.id}>
                <div className="relative cursor-pointer">
                  <div className="mb-12 flex items-center gap-3">
                    <Image src={review.reviewer_image} height={48} width={48} className="h-12 w-12 rounded-full" alt="avatar" />
                    <div>
                      <h6 className="mb-2 text-base/none font-medium text-default-900">{review.reviewer_name}</h6>
                      <div className="flex gap-1.5">
                        {Array.from(new Array(Math.floor(review.stars))).map((_star, idx) => (
                          <FaStar key={idx} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                        {!Number.isInteger(review.stars) && <FaStarHalfStroke size={16} className="fill-yellow-400 text-yellow-400" />}
                      </div>
                    </div>
                  </div>
                  <div className="relative px-12">
                    <div className="absolute -top-5 start-0">
                      <LuQuote size={32} className="rotate-180 fill-primary text-primary" />
                    </div>
                    <div className="absolute -bottom-5 end-0">
                      <LuQuote size={32} className="fill-primary text-primary" />
                    </div>
                    <p className="text-base font-medium text-default-400">{review.review}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <Swiper
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          className="clients-testimonial-pagination relative !mt-6 h-24"
          wrapperClass="ps-12 !py-6 space-x-2"
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          loop
        >
          <SwiperSlide className="!h-12 !w-12 cursor-pointer">
            <Image src={avatar1Img} className="h-12 w-12 rounded-full" alt="avatar" />
          </SwiperSlide>
          <SwiperSlide className="!h-12 !w-12 cursor-pointer">
            <Image src={avatar2Img} className="h-12 w-12 rounded-full" alt="avatar" />
          </SwiperSlide>
          <SwiperSlide className="!h-12 !w-12 cursor-pointer">
            <Image src={avatar3Img} className="h-12 w-12 rounded-full" alt="avatar" />
          </SwiperSlide>
          <SwiperSlide className="!h-12 !w-12 cursor-pointer">
            <Image src={avatar4Img} className="h-12 w-12 rounded-full" alt="avatar" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default TestimonialsSwiper
