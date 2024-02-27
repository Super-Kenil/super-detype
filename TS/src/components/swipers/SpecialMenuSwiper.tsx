'use client'
import Image from 'next/image'
import Link from 'next/link'
import { LuChevronRight } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import { currentCurrency } from '@/common'
import type { DishType } from '@/types/food'

const SpecialMenuSwiper = ({ dishes }: { dishes: DishType[] }) => {
  return (
    <Swiper
      className="menu-swiper h-full w-full"
      modules={[Thumbs, Navigation]}
      spaceBetween={12}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      navigation={{
        nextEl: '.special-menu-right',
        prevEl: '.special-menu-left',
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      loop
    >
      {dishes.map((dish) => (
        <SwiperSlide key={dish.id}>
          <div className="relative cursor-pointer overflow-hidden rounded-lg">
            <Image src={dish.images[0]} className="h-full w-full" alt="pizza" width={336.7} height={449.7} />
            <div className="absolute inset-0 bg-black/20">
              <div className="inline-flex h-full w-full items-end">
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium text-white">{dish.name}</h5>
                  <h5 className="mb-2 text-xl font-semibold text-white">
                    <span className="text-base font-medium text-yellow-400">{currentCurrency}&nbsp;</span>
                    {dish.price}
                  </h5>
                  <Link href="/dishes" className="inline-flex items-center border-b border-dashed border-white text-white">
                    Order Now <LuChevronRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SpecialMenuSwiper
