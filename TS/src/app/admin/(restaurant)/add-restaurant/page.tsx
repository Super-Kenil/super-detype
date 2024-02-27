import { type Metadata } from 'next'
import PersonalDetailsForm from './PersonalDetailsForm'
import BusinessDetailForm from './BusinessDetailForm'
import BankDetailsForm from './BankDetailsForm'
import { BreadcrumbAdmin } from '@/components'

export const metadata: Metadata = {
  title: 'Add Restaurant',
}

const AddRestaurant = () => {
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Add Restaurant" subtitle="Restaurants" link="/admin/restaurants" />
        <div>
          <nav className="mb-6 flex flex-wrap justify-center gap-4" aria-label="Tabs" role="tablist">
            <button
              type="button"
              className="active flex w-full justify-center rounded-lg bg-primary/10 px-20 py-3 text-center text-sm font-medium text-primary hs-tab-active:bg-primary hs-tab-active:text-white sm:w-auto"
              data-hs-tab="#tabPersonalDetail"
              aria-controls="tabPersonalDetail"
              role="tab"
            >
              Personal Detail
            </button>
            <button
              type="button"
              className="flex w-full justify-center rounded-lg bg-primary/10 px-20 py-3 text-center text-sm font-medium text-primary hs-tab-active:bg-primary hs-tab-active:text-white sm:w-auto"
              data-hs-tab="#tabBusinessDetail"
              aria-controls="tabBusinessDetail"
              role="tab"
            >
              Business Detail
            </button>
            <button
              type="button"
              className="flex w-full justify-center rounded-lg bg-primary/10 px-20 py-3 text-center text-sm font-medium text-primary hs-tab-active:bg-primary hs-tab-active:text-white sm:w-auto"
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

export default AddRestaurant
