import { type Metadata } from 'next'
import PersonalDetailForm from './PersonalDetailForm'
import CredentialsManagementForm from './CredentialsManagementForm'
import BillingAddressForm from './BillingAddressForm'
import ShippingAddressForm from './ShippingAddressForm'
import { BreadcrumbAdmin } from '@/components'

export const metadata: Metadata = {
  title: 'Profile',
}
const Settings = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Profile" subtitle="Admin" link="/admin/dashboard" />
        <PersonalDetailForm />
        <div className="mb-6 rounded-lg border border-default-200 p-6">
          <CredentialsManagementForm />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <BillingAddressForm />
          <ShippingAddressForm />
        </div>
      </div>
    </div>
  )
}

export default Settings
