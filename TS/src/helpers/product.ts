import type { DishType } from '@/types/food'

export const calculateDiscount = (dish: DishType): number => {
  return dish.sale?.type == 'amount' ? dish.sale.discount : dish.sale?.type == 'percent' ? (dish.price / 100) * dish.sale.discount : 0
}

export const calculatedPrice = (dish: DishType): number => {
  return getPreciseCurrency(dish.price - calculateDiscount(dish))
}

export const getPreciseCurrency = (price: number) => {
  return parseFloat(price.toFixed(2))
}
