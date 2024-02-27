'use client'
import { ProductListCard } from '@/components'
import { useFilterContext } from '@/context'
import { getFilteredProducts } from '@/helpers'

const DishesList = () => {
  const { categories, maxPrice, minPrice, rating, restaurants, search } = useFilterContext()
  const dishesData = getFilteredProducts({ categories, maxPrice, minPrice, rating, restaurants, search })

  return (
    <>
      {dishesData.map((dish) => (
        <ProductListCard key={dish.id} dish={dish} />
      ))}
    </>
  )
}

export default DishesList
