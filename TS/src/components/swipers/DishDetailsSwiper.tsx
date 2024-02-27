'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Controller, Navigation, Thumbs } from 'swiper/modules'
import { burritoBowl2Img, burritoBowl3Img, burritoBowlImg } from '@/assets/data'
import type { Swiper as SwiperType } from 'swiper'

// styles
import 'swiper/css'

const DishDetailsSwiper = ({ images }: { images?: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const dishImages = [burritoBowlImg, burritoBowl2Img, burritoBowl3Img] ?? images

  return (
    <div className="grid grid-cols-1">
      <div>
        <Swiper
          modules={[Navigation, Thumbs, Controller]}
          spaceBetween={24}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="cart-swiper"
          loop
        >
          {dishImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image width={500} height={430} alt="food-image" src={img} className="mx-auto h-full max-w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        className="cart-swiper-pagination justify-center"
        wrapperClass="flex-wrap justify-center gap-2 w-full"
        loop={false}
        spaceBetween={10}
        slidesPerView={4}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs]}
        watchSlidesProgress
      >
        {dishImages.map((img, idx) => (
          <SwiperSlide key={idx} className={'!h-24 !w-24 cursor-pointer lg:!h-32 lg:!w-32'}>
            <Image width={124} height={124} alt="food-image" src={img} className="h-full w-full rounded" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default DishDetailsSwiper
