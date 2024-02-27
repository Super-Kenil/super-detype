import { type Metadata } from 'next'
import { BreadcrumbAdmin } from '@/components'
import AddDishForm from './AddDishForm'
import DishUploader from './DishUploader'

export const metadata: Metadata = {
  title: 'Add Dish',
}

const AddProduct = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Add Dish" subtitle="Dishes" />
        <div className="grid gap-6 xl:grid-cols-3">
          <div>
            <DishUploader />
          </div>
          <AddDishForm />
        </div>
      </div>
    </div>
  )
}

export default AddProduct
