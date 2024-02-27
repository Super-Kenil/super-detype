import { dishesData } from '@/assets/data'
import { calculatedPrice } from '@/helpers'

export const usePriceRange = () => {
  const prices = dishesData.map((product) => calculatedPrice(product))
  return {
    minPrice: Math.min(...prices),
    maxPrice: Math.max(...prices),
  }
}
