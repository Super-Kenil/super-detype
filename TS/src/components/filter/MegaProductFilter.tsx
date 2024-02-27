'use client'
import { LuChevronDown, LuX } from 'react-icons/lu'
import { FilterResetButton, SimplebarReactClient } from '@/components'
import CategoriesFilter from './CategoriesFilter'
import PriceFilter from './PriceFilter'
import RestaurantFilter from './RestaurantFilter'
import RatingFilter from './RatingFilter'
import { dishTags } from '@/assets/data'
import PopularDishOfferCard from './PopularDishOfferCard'

const MegaProductFilter = () => {
  return (
    <div
      className="hs-overlay fixed start-0 top-0 z-60 hidden h-full w-full max-w-xs -translate-x-full transform bg-white transition-all hs-overlay-open:translate-x-0 dark:bg-default-50 lg:static lg:start-auto lg:z-auto lg:block lg:w-1/4 lg:max-w-full lg:translate-x-0"
      id="filter_Offcanvas"
      tabIndex={-1}
    >
      <div className="flex items-center justify-between border-b border-default-200 px-4 py-3 lg:hidden">
        <h3 className="font-medium text-default-800">Filter Options</h3>
        <button
          className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-default-500 hover:text-default-700"
          data-hs-overlay="#filter_Offcanvas"
          type="button"
        >
          <span className="sr-only">Close modal</span>
          <LuX size={20} />
        </button>
      </div>
      <SimplebarReactClient className="h-[calc(100vh-128px)] overflow-y-auto lg:h-auto">
        <div className="divide-y divide-default-200 p-6 lg:p-0">
          <div>
            <button
              className="hs-collapse-toggle open inline-flex w-full items-center justify-between gap-2 py-4 text-start text-lg font-medium uppercase text-default-900 transition-all"
              data-hs-collapse="#all_categories"
              id="hs-basic-collapse"
              type="button"
            >
              Category
              <LuChevronDown className="transition-transform duration-300 hs-collapse-open:rotate-180" />
            </button>
            <div className="hs-collapse open w-full overflow-hidden transition-[height] duration-300" id="all_categories">
              <CategoriesFilter />
            </div>
          </div>

          <PriceFilter />

          <div>
            <button
              className="hs-collapse-toggle open inline-flex w-full justify-between gap-2 py-4 text-start text-lg font-medium uppercase text-default-900 transition-all"
              data-hs-collapse="#cafe_restaurant"
              id="hs-basic-collapse"
              type="button"
            >
              Popular Café / Restaurant
              <LuChevronDown className="transition-transform duration-300 hs-collapse-open:rotate-180" />
            </button>
            <div className="hs-collapse open w-full overflow-hidden transition-[height] duration-300" id="cafe_restaurant">
              <RestaurantFilter />
            </div>
          </div>

          <div>
            <button
              className="hs-collapse-toggle open inline-flex w-full justify-between gap-2 py-4 text-start text-lg font-medium uppercase text-default-900 transition-all"
              data-hs-collapse="#dish_ratings"
              id="hs-basic-collapse"
              type="button"
            >
              Popular Café / Restaurant
              <LuChevronDown className="transition-transform duration-300 hs-collapse-open:rotate-180" />
            </button>
            <div className="hs-collapse open mb-4 w-full space-y-4 overflow-hidden transition-[height] duration-300" id="dish_ratings">
              <RatingFilter />
            </div>
          </div>
          <div>
            <button
              className="hs-collapse-toggle open inline-flex w-full justify-between gap-2 py-4 text-lg font-medium uppercase text-default-900 transition-all"
              data-hs-collapse="#popular_tags"
              id="hs-basic-collapse"
              type="button"
            >
              Popular tags
              <LuChevronDown className="transition-transform duration-300 hs-collapse-open:rotate-180" />
            </button>
            <div className="hs-collapse open w-full overflow-hidden transition-[height] duration-300" id="popular_tags">
              <div className="my-3 flex flex-wrap gap-2 gap-y-4">
                {dishTags.map((tag, idx) => {
                  return (
                    <div key={tag + idx}>
                      <input type="checkbox" name={tag + idx} id={tag + idx} className={`peer hidden`} defaultChecked={idx == 2 || idx == 7} />
                      <label
                        htmlFor={tag + idx}
                        className={`cursor-pointer rounded-full border border-default-200 px-3 py-1 transition-all hover:border-primary-500/60 hover:bg-primary/10 hover:text-primary peer-checked:border-primary-500/60 peer-checked:bg-primary/10 peer-checked:text-primary`}
                      >
                        {tag}
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <PopularDishOfferCard />
        </div>
      </SimplebarReactClient>
      <div className="block border-t border-default-200 px-4 py-4 lg:hidden">
        <FilterResetButton />
      </div>
    </div>
  )
}

export default MegaProductFilter
