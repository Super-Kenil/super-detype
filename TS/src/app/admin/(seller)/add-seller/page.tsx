import { type Metadata } from 'next'
import AddSellerForm from './AddSellerForm'
import { BreadcrumbAdmin } from '@/components'

export const metadata: Metadata = {
  title: 'Add Seller',
}

const AddSeller = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Add Seller" subtitle="Sellers" link="/admin/sellers" />
        <AddSellerForm />
      </div>
    </div>
  )
}

export default AddSeller
