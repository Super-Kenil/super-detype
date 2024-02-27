'use client'
import { useFilterContext } from '@/context'
import { restaurantsData } from '@/assets/data'

const RestaurantFilter = () => {
  const { restaurants, updateRestaurant } = useFilterContext()

  return (
    <div className="mb-4 flex flex-col gap-y-4">
      {restaurantsData.map((restaurant) => (
        <div key={restaurant.id} className="flex items-center">
          <input
            id={restaurant.name + restaurant.id}
            defaultChecked={restaurants.includes(restaurant.id)}
            onChange={() => updateRestaurant(restaurant.id)}
            type="checkbox"
            className="form-checkbox h-5 w-5 cursor-pointer rounded border-default-400 bg-transparent text-primary focus:ring-transparent"
          />
          <label htmlFor={restaurant.name + restaurant.id} className="inline-flex select-none items-center ps-3 text-sm text-default-600">
            {restaurant.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default RestaurantFilter
