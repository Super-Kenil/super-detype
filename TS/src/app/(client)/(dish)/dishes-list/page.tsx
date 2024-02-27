import { type Metadata } from 'next'
import { LuSettings2 } from 'react-icons/lu'
import { Breadcrumb, DemoFilterDropdown, MegaProductFilter, ProductPagination } from '@/components'
import DishesList from './DishesList'
import { FoundResultsCount } from '../dishes/DishesGrid'

export const metadata: Metadata = {
  title: 'Dishes List',
}

const ProductList = () => {
  return (
    <>
      <Breadcrumb title="Dishes List" subtitle="Dishes List" />
      <section className="py-10">
        <div className="container">
          <div className="gap-6 lg:flex">
            <MegaProductFilter />
            <div className="lg:w-3/4">
              <div className="mb-10 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
                <div className="flex flex-wrap items-center gap-4 md:flex-nowrap">
                  <button
                    type="button"
                    className="inline-flex items-center gap-4 rounded-full border border-default-200 px-4 py-2.5 text-sm text-default-950 transition-all lg:hidden xl:px-5"
                    data-hs-overlay="#filter_Offcanvas"
                  >
                    Filter <LuSettings2 size={16} />
                  </button>
                  <FoundResultsCount />
                </div>
                <div className="flex items-center">
                  <DemoFilterDropdown filterOptions={['Latest', 'Featured', 'Release Date', 'Avg. Rating']} filterType="Sort By" />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <DishesList />
              </div>
            </div>
          </div>
          <ProductPagination />
        </div>
      </section>
    </>
  )
}

export default ProductList
