import { type Metadata } from 'next'
import EditDishForm from './EditDishForm'
import { BreadcrumbAdmin } from '@/components'
import EditDishUploader from './EditDishUploader'

export const metadata: Metadata = {
  title: 'Edit Dish',
}

const EditProduct = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Edit Dish" subtitle="Dishes" link="/admin/dishes" />
        <div className="grid gap-6 xl:grid-cols-3">
          <div>
            <EditDishUploader />
          </div>
          <EditDishForm />
        </div>
      </div>
    </div>
  )
}

export default EditProduct
