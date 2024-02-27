import Image from 'next/image'
import { LuMoveRight } from 'react-icons/lu'
import { currentCurrency } from '@/common'
import { filterOfferDishOtherImg, offerBgOtherImg } from '@/assets/data'

const PopularDishOfferCard = () => {
  return (
    <div className="py-6">
      <div style={{ backgroundImage: `url(${offerBgOtherImg.src})` }} className="relative overflow-hidden rounded-lg bg-opacity-5 bg-cover bg-center">
        <div className="absolute inset-0 -z-10 bg-primary/10" />
        <div className="p-12">
          <div className="mb-6 flex justify-center">
            <Image src={filterOfferDishOtherImg} alt="dish" />
          </div>
          <div className="mb-10 text-center">
            <h3 className="mb-2 text-2xl font-medium text-default-900">Green Healthy Salad</h3>
            <p className="text-sm text-default-500">Tasty and Healthy Salad for you to eat along side your meal.</p>
          </div>
          <div className="mb-6 flex w-full items-center justify-center gap-2 font-medium text-default-950">Available at : {currentCurrency}59</div>
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-white transition-all hover:bg-primary-500"
            type="button"
          >
            Order Now <LuMoveRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopularDishOfferCard
