import Link from 'next/link'
import { BiFoodTag } from 'react-icons/bi'
import { LuPencil } from 'react-icons/lu'
import { currentCurrency } from '@/common'
import type { DishType } from '@/types/food'

const NewMenuCard = ({ dish }: { dish: DishType }) => {
  const { name, price, type } = dish
  return (
    <div className="rounded-lg bg-default-500/5 p-4">
      <div className="mb-4 flex items-center justify-between gap-6">
        <div className="h-6 w-6">
          <BiFoodTag color={type == 'non-veg' ? 'red' : type == 'veg' ? 'green' : 'orange'} />
        </div>
        <Link
          href=""
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-primary px-3 py-1.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
        >
          <LuPencil size={16} className="fill-primary text-primary group-hover:fill-white group-hover:text-white" /> Edit
        </Link>
      </div>
      <div className="flex items-center justify-between gap-6">
        <h5 className="text-lg font-semibold text-default-900">{name}</h5>
        <p className="text-base font-medium text-default-500">
          {currentCurrency}
          {price}
        </p>
      </div>
    </div>
  )
}

export default NewMenuCard
