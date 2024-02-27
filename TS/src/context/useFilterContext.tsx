'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { type ReactNode, createContext, useContext, useState, useMemo, useEffect } from 'react'
import type { CategoryType, RestaurantType } from '@/types/food'
import type { FilterState } from '@/types/state'

const FilterContext = createContext<FilterState | undefined>(undefined)

export const useFilterContext = (): FilterState => {
  const context = useContext(FilterContext)
  if (context == undefined) {
    throw new Error('useFilterContext must be used within an FilterProvider')
  }
  return context
}

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries([...searchParams])

  const INIT_FILTER_STATE: FilterState = {
    categories: searchParams.has('categories') ? queryParams['categories'].split(',').map((id) => Number(id)) : [],
    restaurants: searchParams.has('restaurants') ? queryParams['restaurants'].split(',').map((id) => Number(id)) : [],
    search: searchParams.has('search') ? queryParams['search'] : undefined,
    minPrice: searchParams.has('minPrice') ? Number(queryParams['minPrice']) : undefined,
    maxPrice: searchParams.has('maxPrice') ? Number(queryParams['maxPrice']) : undefined,
    rating: searchParams.has('rating') ? Number(queryParams['rating']) : undefined,
    updateCategory: () => {},
    updateRestaurant: () => {},
    updateSearch: () => {},
    updateMinPrice: () => {},
    updateMaxPrice: () => {},
    updateRating: () => {},
  }

  const [state, setState] = useState<FilterState>(INIT_FILTER_STATE)

  const updateState = (changes: Partial<FilterState>): void => setState({ ...state, ...changes })

  const updateCategory = (categoryId: CategoryType['id']) => {
    const categories = state.categories
    if (!categories.length || !categories.includes(categoryId)) {
      categories.push(categoryId)
      updateState({ categories })
    } else if (categories.includes(categoryId)) {
      updateState({ categories: categories.filter((id) => id != categoryId) })
    }
  }

  const updateRestaurant = (restaurantId: RestaurantType['id']) => {
    const restaurants = state.restaurants
    if (!restaurants.length || !restaurants.includes(restaurantId)) {
      restaurants.push(restaurantId)
      updateState({ restaurants })
    } else if (restaurants.includes(restaurantId)) {
      updateState({ restaurants: restaurants.filter((id) => id != restaurantId) })
    }
  }

  const updateSearch = (search: string) => updateState({ search })

  const updateMinPrice = (minPrice: number) => updateState({ minPrice })

  const updateMaxPrice = (maxPrice: number) => updateState({ maxPrice })

  const updateRating = (rating: number) => updateState({ rating })

  useEffect(() => {
    let query = ''
    if (!(!state.categories || !state.categories.length)) {
      query += `categories=${state.categories?.join(',')}&`
    }
    if (!(!state.restaurants || !state.restaurants.length)) {
      query += `restaurants=${state.restaurants?.join(',')}&`
    }
    if (state.minPrice) {
      query += `minPrice=${state.minPrice.toString()}&`
    }
    if (state.maxPrice) {
      query += `maxPrice=${state.maxPrice.toString()}&`
    }
    if (state.rating) {
      query += `rating=${state.rating.toString()}&`
    }
    if (state.search && state.search.length != 0) {
      query += `search=${state.search}&`
    }
    router.push(`${pathname}?${query}`, { scroll: false })
  }, [state])

  return (
    <FilterContext.Provider
      value={useMemo(
        () => ({
          ...state,
          updateCategory,
          updateRestaurant,
          updateSearch,
          updateMinPrice,
          updateMaxPrice,
          updateRating,
        }),
        [state]
      )}
    >
      {children}
    </FilterContext.Provider>
  )
}
