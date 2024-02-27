'use client'
import dynamic from 'next/dynamic'
import type { DishType } from '@/types/food'
const ProductQuantityToggler = dynamic(() => import('@/components/shopping-interactivity/ProductQuantityToggler'), { ssr: false })
const AddToCartButton = dynamic(() => import('@/components/shopping-interactivity/AddToCartButton'), { ssr: false })
const ProductWishlistToggler = dynamic(() => import('@/components/shopping-interactivity/ProductWishlistToggler'), { ssr: false })

const QuantityInteraction = ({ dish }: { dish: DishType }) => {
  return (
    <div className="mb-8 flex items-center gap-2">
      <AddToCartButton dish={dish} className="w-fit" />
      <ProductQuantityToggler dish={dish} size="medium" />
      <ProductWishlistToggler dish={dish} size={30} />
    </div>
  )
}

export default QuantityInteraction
