import { type Metadata } from 'next'
import EditCustomerForm from './EditCustomerForm'
import { BreadcrumbAdmin } from '@/components'

export const metadata: Metadata = {
  title: 'Edit Customer',
}
const EditCustomer = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Edit Customer" subtitle="Customers" link="/admin/customers" />
        <EditCustomerForm />
      </div>
    </div>
  )
}

export default EditCustomer
