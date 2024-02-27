import { type Metadata } from 'next'
import EditSellerForm from './EditSellerForm'
import { BreadcrumbAdmin } from '@/components'

export const metadata: Metadata = {
  title: 'Edit Seller',
}

const EditSeller = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Edit Seller" subtitle="Seller" link="/admin/sellers" />
        <EditSellerForm />
      </div>
    </div>
  )
}

export default EditSeller
