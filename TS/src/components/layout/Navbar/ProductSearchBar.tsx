'use client'
import dynamic from 'next/dynamic'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { type ChangeEvent } from 'react'
import { createPortal } from 'react-dom'
import { LuSearch } from 'react-icons/lu'
import { useFilterContext } from '@/context'
const FloatingSearchBar = dynamic(() => import('./FloatingSearchBar'))

const ProductSearchBar = () => {
  const { search, updateSearch } = useFilterContext()

  const pagesWithDishes = ['/dishes', '/dishes-list']

  const pathname = usePathname()
  const router = useRouter()

  const searchParams = useSearchParams()
  const queryParams = Object.fromEntries([...searchParams])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch(e.target.value)
    setTimeout(() => {
      if (!pagesWithDishes.includes(pathname)) {
        router.push(`/dishes? + ${new URLSearchParams(queryParams).toString()}`)
      }
    }, 10)
  }

  return (
    <form>
      <div className="relative w-72">
        <input
          type="search"
          placeholder="Search for items..."
          value={search ?? ''}
          onChange={handleSearch}
          className={
            'form-input w-full rounded-full  border-transparent bg-primary-400/20 px-4 py-1.5 ps-10 placeholder-primary-500 dark:bg-default-50'
          }
        />
        <span className="absolute start-3 top-1/2 -translate-y-1/2">
          <LuSearch className="text-primary-500" />
        </span>
      </div>

      <button className="hidden" type="submit" />
      {createPortal(
        <FloatingSearchBar handleSearch={handleSearch} searchValue={search} />,
        document.body
      )}
    </form>
  )
}

export default ProductSearchBar
