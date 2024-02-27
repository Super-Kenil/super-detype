'use client'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { cn } from '@/utils'
import { cardChipPaymentImg, walletCardBgPaymentImg } from '@/assets/data'
import type { CardType } from '@/types/other'

import 'swiper/css/navigation'

const WalletCardSwiper = ({ cards }: { cards: CardType[] }) => {
  const bgColors = ['bg-default-600/80', 'bg-indigo-600/80', 'bg-red-600/80', 'bg-primary/80']
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.card-button-next',
          prevEl: '.card-button-prev',
        }}
        loop
        className="card-wallet mb-6 md:!mx-6"
      >
        {cards.map((card, idx) => {
          return (
            <SwiperSlide key={card.id}>
              <div
                style={{
                  backgroundImage: `url(${walletCardBgPaymentImg.src})`,
                }}
                className={cn('overflow-hidden rounded-lg bg-cover bg-right-bottom bg-no-repeat', bgColors[idx])}
              >
                <div className="p-6">
                  <div className="mb-8">
                    <div className="h-11 w-16 overflow-hidden">
                      <Image src={card.provider} className="h-full max-w-full" alt="card-provider-company" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="mb-9 flex flex-wrap items-center justify-between gap-y-4">
                      <div className="flex h-8 items-end">
                        <Image src={cardChipPaymentImg} width={44.3} height={32} className="h-full max-w-full" alt="chip" />
                      </div>
                      <div className="flex gap-4">
                        {card.cardNo
                          .toString()
                          .match(/\d{4}/g)
                          ?.map((chunk, idx) => (
                            <span key={idx} className="font-sans line-clamp-1 text-xl font-semibold tracking-widest text-white">
                              {chunk}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-1/2">
                      <p className="mb-0.5 text-base text-white">Card Holder</p>
                      <h3 className="line-clamp-1 text-lg font-semibold uppercase text-white">{card.card_holder_name}</h3>
                    </div>
                    <div className="w-1/2">
                      <p className="mb-0.5 text-base text-white">Expire Date</p>
                      <h3 className="line-clamp-1 text-lg font-semibold text-white">{card.expiry_date}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="hidden w-full items-center gap-1 md:flex ">
        <div className="card-button-prev absolute start-0 top-1/2 -translate-y-1/2 cursor-pointer text-default-700 after:content-[]">
          <FaAngleLeft size={20} />
        </div>
        <div className="card-button-next absolute end-0 top-1/2 -translate-y-1/2 cursor-pointer text-default-700 after:content-[]">
          <FaAngleRight size={20} />
        </div>
      </div>
    </div>
  )
}

export default WalletCardSwiper
