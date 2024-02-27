'use client'
import { useState } from 'react'
import ReactSlider from 'react-slider'
import { LuChevronDown } from 'react-icons/lu'
import { useFilterContext } from '@/context'
import { usePriceRange } from '@/hooks'

const PriceFilter = () => {
  const { minPrice, maxPrice, updateMinPrice, updateMaxPrice } = useFilterContext()

  const prices = usePriceRange()

  const [priceRange, setPriceRange] = useState<number[]>([minPrice ?? prices?.minPrice ?? 0, maxPrice ?? prices?.maxPrice ?? 3000])
  const onPriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]])
    if (priceRange[0] != values[0]) {
      updateMinPrice(values[0])
    }
    if (priceRange[1] != values[1]) {
      updateMaxPrice(values[1])
    }
  }

  return (
    <div>
      <button
        className="hs-collapse-toggle open inline-flex w-full items-center justify-between gap-2 py-4 text-lg font-medium uppercase text-default-900 transition-all"
        data-hs-collapse="#price_range"
        id="hs-basic-collapse"
        type="button"
      >
        <p>
          Price Range <span className="text-sm font-normal text-default-700">{`(${priceRange[0]} - ${priceRange[1]})`}</span>
        </p>
        <LuChevronDown className="transition-transform duration-300 hs-collapse-open:rotate-180" />
      </button>
      <div className="hs-collapse open w-full overflow-hidden transition-[height] duration-300" id="price_range">
        <div className="relative mb-6 flex flex-col space-y-5">
          <div className="space-y-2 pt-4">
            <ReactSlider
              className="h-6 w-full max-w-[500px]"
              thumbClassName="h-5 w-5 rounded-full -right-2.5 -top-1.5 outline-none cursor-pointer bg-primary border-2 transition-colors border-primary-600 hover:bg-primary-600"
              trackClassName="bg-[#ddd] h-2 rounded-lg [&.slider-track-1]:bg-primary-400 slider-track"
              min={prices?.minPrice}
              max={prices?.maxPrice}
              defaultValue={[priceRange[0], priceRange[1]]}
              onAfterChange={onPriceChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceFilter
