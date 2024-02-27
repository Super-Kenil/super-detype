'use client'
import { LuHeart } from 'react-icons/lu'
import { useShoppingContext } from '@/context'
import { cn } from '@/utils'
import type { DishType } from '@/types/food'

const ProductWishlistToggler = ({ dish, size }: { dish: DishType; size?: number }) => {
  const { toggleToWishlist, isInWishlist } = useShoppingContext()

  return (
    <button onClick={() => toggleToWishlist(dish)}>
      <LuHeart
        size={size ?? 24}
        className={cn(
          'relative z-10 cursor-pointer transition-all',
          isInWishlist(dish) ? 'fill-red-500 text-red-500' : 'hover:fill-red-500 hover:text-red-500'
        )}
      />
    </button>
  )
}

export default ProductWishlistToggler
