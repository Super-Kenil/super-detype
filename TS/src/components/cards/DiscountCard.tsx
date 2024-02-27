import Link from 'next/link'
import { LuMoveRight } from 'react-icons/lu'
import { discountOtherImg } from '@/assets/data'

const DiscountCard = ({ discount, link }: { discount: string; link: string }) => {
  return (
    <div style={{ backgroundImage: `url(${discountOtherImg.src})` }} className="relative h-full overflow-hidden rounded-lg bg-cover">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative p-8 md:p-12">
        <h4 className="mb-6 text-5xl font-semibold text-yellow-500">{discount}</h4>
        <p className="mb-6 text-lg text-default-500">on your first order</p>
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all duration-200 hover:border-primary-700 hover:bg-primary-500 md:mb-10"
          href={link}
        >
          Shop Now <LuMoveRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default DiscountCard
