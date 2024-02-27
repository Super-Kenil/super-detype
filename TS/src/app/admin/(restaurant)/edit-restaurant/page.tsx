import { type Metadata } from 'next'
import PersonalDetailsForm from './PersonalDetailsForm'
import BusinessDetailForm from './BusinessDetailForm'
import BankDetailsForm from './BankDetailsForm'
import { BreadcrumbAdmin } from '@/components'

export const metadata: Metadata = {
  title: 'Edit Restaurant',
}

const EditRestaurant = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Edit Restaurant" subtitle="Restaurants" link="/admin/restaurants" />
        <div>
          <nav className="mb-6 flex flex-wrap justify-center gap-4" aria-label="Tabs" role="tablist">
            <button
              type="button"
              className="active inline-flex rounded-lg bg-primary/10 px-20 py-3 text-center text-sm font-medium text-primary hs-tab-active:bg-primary hs-tab-active:text-white"
              data-hs-tab="#tabPersonalDetail"
              aria-controls="tabPersonalDetail"
              role="tab"
            >
              Personal Detail
            </button>
            <button
              type="button"
              className="inline-flex rounded-lg bg-primary/10 px-20 py-3 text-center text-sm font-medium text-primary hs-tab-active:bg-primary hs-tab-active:text-white"
              data-hs-tab="#tabBusinessDetail"
              aria-controls="tabBusinessDetail"
              role="tab"
            >
              Business Detail
            </button>
            <button
              type="button"
              className="inline-flex rounded-lg bg-primary/10 px-20 py-3 text-center text-sm font-medium text-primary hs-tab-active:bg-primary hs-tab-active:text-white"
              data-hs-tab="#tabBankDetail"
              aria-controls="tabBankDetail"
              role="tab"
            >
              Bank Detail
            </button>
          </nav>
          <div className="rounded-lg border border-default-200 p-6">
            <PersonalDetailsForm />
            <BusinessDetailForm />
            <BankDetailsForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditRestaurant
