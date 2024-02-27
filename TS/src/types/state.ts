import { CategoryType, DishType, RestaurantType } from './food'
import { IdType } from './other'

export type WishlistType = DishType

export type CartType = {
  id: IdType
  dish_id: IdType
  dish?: DishType
  quantity: number
}

export type CalculatedOrder = {
  total: number
  totalDiscount: number
  tax: number
  orderTotal: number
}

export type ShoppingState = {
  cartItems: CartType[]
  wishlists: WishlistType[]
  addToCart: (dish: DishType, quantity: number) => void
  toggleToWishlist: (dish: DishType) => void
  isInWishlist: (dish: DishType) => boolean
  isInCart: (dish: DishType) => boolean
  removeFromCart: (dish: DishType) => void
  updateQuantityForDish: (dish: DishType, quantity: number) => void
  getCalculatedOrder: () => CalculatedOrder
  getCartItemById: (dishId: DishType) => CartType | undefined
}

export type FilterState = {
  categories: Array<CategoryType['id']>
  restaurants: Array<RestaurantType['id']>
  search: string | undefined
  minPrice: number | undefined
  maxPrice: number | undefined
  rating: number | undefined
  updateCategory: (categoryId: CategoryType['id']) => void
  updateRestaurant: (restaurantId: RestaurantType['id']) => void
  updateSearch: (search: string) => void
  updateMinPrice: (minPrice: number) => void
  updateMaxPrice: (maxPrice: number) => void
  updateRating: (rating: number) => void
}
