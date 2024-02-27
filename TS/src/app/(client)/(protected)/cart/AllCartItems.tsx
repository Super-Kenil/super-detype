'use client'
import { ShoppingCartCard } from '@/components'
import { useShoppingContext } from '@/context'
import type { DishType } from '@/types/food'

const AllCartItems = () => {
  const { cartItems } = useShoppingContext()

  return (
    <>
      {cartItems.map((item) => {
        const dish: DishType | undefined = item.dish
        return dish && <ShoppingCartCard key={item.id} dish={dish} />
      })}
    </>
  )
}

export default AllCartItems
