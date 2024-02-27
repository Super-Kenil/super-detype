import Image from 'next/image'
import { filterOfferDish2OtherImg, offerBg3OtherImg } from '@/assets/data/images'
const SpacialMenuCard = () => {
  return (
    <div style={{ backgroundImage: `url(${offerBg3OtherImg.src})` }} className="rounded-lg bg-primary/10">
      <div className="p-4 text-center">
        <div className="mb-10 flex items-center justify-center">
          <div className="w-1/2">
            <h4 className="-rotate-12 text-xl font-semibold text-primary">
              Today’s <br /> Special <br /> Menu
            </h4>
          </div>
          <div className="w-1/2">
            <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-orange-400 text-xl font-medium text-default-900">
              50% <br /> OFF
            </span>
          </div>
        </div>
        <div className="mb-6 flex items-center justify-center">
          <Image src={filterOfferDish2OtherImg} className="relative h-full max-w-full rounded-lg" alt="" />
        </div>
        <button className="inline-flex w-auto items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-10 py-3 text-center text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500 xl:w-full">
          Manage
        </button>
      </div>
    </div>
  )
}

export default SpacialMenuCard
