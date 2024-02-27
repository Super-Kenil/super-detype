'use client'
import { useFilterContext } from '@/context'
import { categoriesData } from '@/assets/data'

const CategoriesFilter = () => {
  const { categories, updateCategory } = useFilterContext()

  return (
    <div className="relative mb-6 flex flex-col space-y-4">
      {categoriesData.map((category) => (
        <div key={category.id} className="flex items-center">
          <input
            id={category.name + category.id}
            defaultChecked={categories.includes(category.id)}
            onChange={() => updateCategory(category.id)}
            type="checkbox"
            className="form-checkbox h-5 w-5 cursor-pointer rounded border-default-400 bg-transparent text-primary focus:ring-transparent"
          />
          <label htmlFor={category.name + category.id} className="inline-flex select-none items-center ps-3 text-sm text-default-600">
            {category.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default CategoriesFilter
