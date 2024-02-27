import Image from 'next/image'
import type { DishType } from '@/types/food'

const UpcomingNewMenuCard = ({ product }: { product: DishType }) => {
  const { images, name } = product
  return (
    <div className="rounded-lg bg-default-500/5 p-4">
      <div className="flex flex-col justify-center gap-6 sm:flex-row">
        <div className="shrink">
          <div className="h-32 w-32 overflow-hidden rounded-lg bg-white dark:bg-default-100">
            <Image src={images[0]} className="h-full w-full" height={112} width={112} alt="cake" />
          </div>
        </div>
        <div className="grow">
          <h4 className="mb-2 text-lg font-medium text-default-950">{name}</h4>
          <p className="text-sm text-default-600">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
            quas molestias excepturi
          </p>
        </div>
      </div>
    </div>
  )
}

export default UpcomingNewMenuCard
