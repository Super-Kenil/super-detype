import { IdType } from './other'

export type CategoryType = {
  id: IdType
  name: string
  image: string
}

export type ReviewType = {
  count: number
  stars: number
}

export type SaleType = {
  ends_on: Date
} & (
  | {
      type: 'percent'
      discount: number
    }
  | {
      type: 'amount'
      discount: number
    }
)

export type DishType = {
  id: IdType
  category_id: CategoryType['id']
  restaurant_id: RestaurantType['id']
  category?: CategoryType
  restaurant?: RestaurantType
  name: string
  images: string[]
  tags: string[]
  sale?: SaleType
  is_popular?: boolean
  is_new?: boolean
  price: number
  review: ReviewType
  quantity: number
  type: 'veg' | 'non-veg' | 'eggetarian'
}

export type SellerType = {
  id: IdType
  name: string
  photo: string
  contact_no: number
  email: string
  location: string
  order_total: number
  orders: number
  joining_date: string
  joining_time: string
  status: 'active' | 'blocked'
}

export type RestaurantType = {
  id: IdType
  seller_id: SellerType['id']
  seller?: SellerType
  name: string
  logo: string
  categories: CategoryType['id'][]
  total_dishes: number
  total_sales: number
  address: string
  email: string
  contact_no: number
}
