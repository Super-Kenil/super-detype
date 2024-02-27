'use client'
import { useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { cn } from '@/utils'

type DemoFilterDropdownType = {
  filterType?: string
  filterOptions: string[]
}

const DemoFilterDropdown = ({ filterType, filterOptions }: DemoFilterDropdownType) => {
  const [selectedOption, setSelectedOption] = useState(filterOptions[0])

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        type="button"
        className="hs-dropdown-toggle flex items-center gap-2 rounded-md bg-default-100 px-4 py-3 text-sm font-medium text-default-700 transition-all xl:px-5"
      >
        {filterType && filterType + ' : '} {selectedOption ?? ''} <LuChevronDown size={16} />
      </button>
      <div className="hs-dropdown-menu z-20 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
        <ul className="flex flex-col gap-1">
          {filterOptions.map((option, idx) => (
            <li key={option + idx}>
              <span
                onClick={() => setSelectedOption(option)}
                className={cn(
                  'flex items-center gap-3 rounded px-3 py-2 font-normal transition-all hover:bg-default-100 hover:text-default-700',
                  selectedOption == option ? ' bg-default-100 text-default-700' : 'text-default-600'
                )}
              >
                {option}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DemoFilterDropdown
