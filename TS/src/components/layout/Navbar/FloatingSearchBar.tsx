import { ChangeEvent } from 'react'
import { LuSearch, LuX } from 'react-icons/lu'

type FloatingSearchBarProps = {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string | undefined
}

const FloatingSearchBar = ({ handleSearch, searchValue }: FloatingSearchBarProps) => {

  return (
    <div id="mobileSearchSidebar" className="hs-overlay fixed start-0 top-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="m-3 mt-0 opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="flex flex-col rounded-lg bg-white shadow-sm">
          <div className="relative flex w-full">
            <span className="absolute start-4 top-3">
              <LuSearch size={16} className="text-primary-500" />
            </span>
            <input
              onChange={handleSearch}
              value={searchValue ?? ''}
              className="block w-full rounded-lg border-transparent bg-transparent px-10 py-2.5 text-sm text-primary-500 placeholder-primary-500"
              placeholder="Search for items..."
              type="search"
            />
            <button className="absolute end-4 top-3" data-hs-overlay="#mobileSearchSidebar">
              <LuX size={16} className="text-primary-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FloatingSearchBar
