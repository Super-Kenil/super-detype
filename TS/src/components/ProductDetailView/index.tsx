import dynamic from 'next/dynamic'
import { BiFoodTag } from 'react-icons/bi'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { LuEye } from 'react-icons/lu'
import { kebabToTitleCase } from '@/utils'
import { calculatedPrice, getRestaurantById } from '@/helpers'
import { currentCurrency } from '@/common'
import type { DishType } from '@/types/food'
const OrderInteraction = dynamic(() => import('./OrderInteraction'))

const dishNutritionFacts = [
  {
    name: 'Calories',
    qty: '564',
  },
  {
    name: 'Fat',
    qty: '306mg',
  },
  {
    name: 'Carbs',
    qty: '2gm',
  },
  {
    name: 'Protein',
    qty: '6.5gm',
  },
]

const ProductDetailView = async ({ dish, showButtons }: { dish: DishType; showButtons?: boolean }) => {
  const { name, price, restaurant_id, review, tags, type, sale } = dish

  const restaurant = await getRestaurantById(restaurant_id).then((restaurant) => restaurant)

  const discountedPrice = calculatedPrice(dish)

  return (
    <div>
      <div className="mb-1 flex flex-wrap items-end justify-between font-medium text-default-800">
        <h4 className="text-4xl">{name}</h4>
        <h3 className="text-3xl">
          {currentCurrency}
          {discountedPrice}&nbsp;
          {sale && (
            <span className="ms-1 text-base text-gray-400 line-through">
              {currentCurrency}
              {price}
            </span>
          )}
        </h3>
      </div>

      {restaurant && (
        <h5 className="mb-2 text-lg font-medium text-default-600">
          <span className="text-base font-normal text-default-500">by </span>
          {restaurant.name}
        </h5>
      )}

      <div className="mb-3 flex items-center gap-3">
        <div className="flex gap-1.5">
          {Array.from(new Array(Math.floor(review.stars))).map((_star, idx) => (
            <FaStar key={idx} size={18} className="text-yellow-400" />
          ))}
          {!Number.isInteger(review.stars) && <FaStarHalfStroke size={18} className="text-yellow-400" />}
          {review.stars < 5 &&
            Array.from(new Array(5 - Math.ceil(review.stars))).map((_val, idx) => <FaStar key={idx} size={18} className="text-default-400" />)}
        </div>
        <div className="h-4 w-px bg-default-400" />
        <h5 className="text-sm text-default-500">{review.count} Reviews</h5>
      </div>
      <p className="mb-4 text-sm text-default-500">
        Mexican burritos are usually made with a wheat tortilla and contain grilled meat, cheese toppings, and fresh vegetables which are sources of
        vitamins, proteins, fibers, minerals, and antioxidants. This makes burritos a balanced meal that can be enjoyed in moderation as part of a
        healthy meal plan.
      </p>
      <div className="mb-5 flex gap-2">
        <div className="flex items-center gap-2.5 rounded-full border border-default-200 px-3 py-1.5">
          <BiFoodTag height={16} width={16} color={type == 'non-veg' ? 'red' : type == 'veg' ? 'green' : 'orange'} />
          <span className="text-xs">{kebabToTitleCase(type)}</span>
        </div>

        {tags.map((tag, idx) => (
          <div key={tag + idx} className="flex items-center rounded-full border border-default-200 px-3 py-1.5">
            <span className="text-xs">{tag}</span>
          </div>
        ))}
      </div>
      <div className="mb-8 flex items-center gap-3">
        <h4 className="text-sm text-default-700">Size :</h4>

        {['S', 'M', 'L'].map((size, idx) => (
          <div key={size + idx}>
            <input type="radio" name="size-options" id={size + idx} value={size} className="peer hidden" defaultChecked />
            <label
              htmlFor={size + idx}
              className="flex h-9 w-9 cursor-pointer select-none items-center justify-center rounded-full bg-default-200 text-center text-sm peer-checked:bg-primary peer-checked:text-white"
            >
              {size}
            </label>
          </div>
        ))}
      </div>

      {showButtons && <OrderInteraction dish={dish} />}

      <div className="mb-6">
        <h4 className="mb-4 text-lg font-medium text-default-700">
          Nutrition Facts <span className="text-sm text-default-400">(per serving)</span>
        </h4>
        <div className="rounded-lg border border-default-200 p-3">
          <div className="grid grid-cols-4 justify-center">
            {dishNutritionFacts.map((nutrition, idx) => (
              <div key={nutrition.name + idx} className="text-center">
                <h4 className="mb-1 text-base font-medium text-default-700">{nutrition.qty}</h4>
                <h4 className="text-base text-default-700">{nutrition.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <LuEye size={20} className="me-2 text-primary" />
        <h5 className="text-sm text-default-600">
          <span className="font-semibold text-primary">152</span>&nbsp; People are viewing this right now
        </h5>
      </div>
    </div>
  )
}

export default ProductDetailView
