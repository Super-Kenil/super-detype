import { type Metadata } from 'next'
import { BreadcrumbAdmin, DishDataTable } from '@/components'
import { dishesData, adminDishListData } from '@/assets/data'
import type { AdminDishType } from '@/types/other'
import type { DishType } from '@/types/food'
import type { ColumnType } from '@/types/util'

export const metadata: Metadata = {
  title: 'Dishes List',
}

const ProductList = () => {
  const rows = dishesData.map((dish, idx) => {
    return {
      ...dish,
      ...adminDishListData[idx],
    }
  })

  const columns: Array<ColumnType<DishType & AdminDishType>> = [
    {
      key: 'name',
      name: 'Dish Name',
    },
    {
      key: 'category_id',
      name: 'Category',
    },
    {
      key: 'price',
      name: 'Price',
    },
    {
      key: 'quantity',
      name: 'Quantity',
    },
    {
      key: 'create_by',
      name: 'Created By',
    },
    {
      key: 'status',
      name: 'Status',
    },
  ]

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Dishes List" subtitle="Dishes" />

        <div className="grid grid-cols-1">
          <div className="rounded-lg border border-default-200">
            <DishDataTable<DishType & AdminDishType>
              rows={rows}
              columns={columns}
              title="Dishes List"
              buttonLink="/admin/add-dish"
              buttonText="Add Dish"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
