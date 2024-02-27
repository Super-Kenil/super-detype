'use client'
import { useState } from 'react'
import { LuTrash } from 'react-icons/lu'
import { useShoppingContext } from '@/context'
import { cn } from '@/utils'
import type { DishType } from '@/types/food'

type ProductQuantityTogglerProps = {
  dish: DishType
  size?: 'small' | 'medium'
}

const ProductQuantityToggler = ({ dish, size = 'small' }: ProductQuantityTogglerProps) => {
  const { addToCart, removeFromCart, isInCart, updateQuantityForDish, getCartItemById } = useShoppingContext()

  const [quantity, setQuantity] = useState<number>(getCartItemById(dish)?.quantity ?? 1)

  const increment = () => {
    if (dish.quantity > quantity) {
      if (isInCart(dish)) {
        updateQuantityForDish(dish, quantity + 1)
      } else {
        addToCart(dish, quantity)
      }
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 0) {
      if (isInCart(dish)) {
        if (quantity <= 1) {
          removeFromCart(dish)
          return
        } else {
          updateQuantityForDish(dish, quantity - 1)
        }
      } else {
        addToCart(dish, quantity)
      }
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  return (
    <div
      className={cn(
        'relative z-10 inline-flex items-center justify-between rounded-full border border-default-200',
        size == 'small' ? 'p-1' : 'p-[5px]',
        { hidden: !isInCart(dish) }
      )}
    >
      <button
        onClick={decrement}
        type="button"
        className={cn(
          'inline-flex flex-shrink-0 items-center justify-center rounded-full bg-default-200 text-default-800',
          size == 'small' ? 'h-6 w-6 text-sm' : 'h-8 w-8 text-xl'
        )}
      >
        {quantity < 2 ? <LuTrash className="text-red-500" /> : '–'}
      </button>

      <p className="min-w-[45px] text-center"> {quantity} </p>

      <button
        onClick={increment}
        type="button"
        className={cn(
          'inline-flex flex-shrink-0 items-center justify-center rounded-full bg-default-200 text-default-800',
          size == 'small' ? 'h-6 w-6 text-sm' : 'h-8 w-8 text-xl'
        )}
      >
        +
      </button>
    </div>
  )
}

export default ProductQuantityToggler
