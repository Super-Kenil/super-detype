import { type StaticImageData } from 'next/image'
import { type IconType } from 'react-icons'
import type { DishType } from './food'

export type IdType = number

export type StatusType = 'paid' | 'cancelled' | 'refunded'

export type TestimonialType = {
  id: IdType
  reviewer_name: string
  reviewer_image: string
  stars: number
  review: string
}

export type CardType = {
  id: IdType
  cardNo: number
  expiry_date: string
  card_holder_name: string
  provider: string
}

export type LandingDemoType = {
  link: string
  image: StaticImageData
  name: string
}

export type DemoFeatureType = {
  title: string
  icon: IconType
  description: string
}

export type FrameworkType = {
  name: string
  icon: StaticImageData
}

export type BreadcrumbProps = {
  title: string
  subtitle?: string
  link?: string
}

export type OrderType = {
  id: string
  date: string
  dish_id: DishType['id']
  dish?: DishType
  amount: DishType['price']
  status: StatusType
}

export type TransactionType = {
  asset: string
  type: 'shopping' | 'grocery' | 'restaurant' | 'food'
  date: string
  status: StatusType
  amount: number
}

export type AnalyticsOverviewCardType = {
  name: string
  amount: number
  change: string
}

export type AdminDishType = {
  dish_id: DishType['id']
  dish?: DishType
  create_by: string
  status: 'draft' | 'published' | 'reviewing'
}

export type OrderProgressType = {
  [status: string]: {
    time: string
    order_id: OrderType['id']
    order?: OrderType
  }[]
}

export type NotificationItem = {
  id: number
  name: string
  subText: string
  avatar: StaticImageData
  createdAt: Date
}
