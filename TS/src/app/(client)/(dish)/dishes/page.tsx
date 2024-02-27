import { type Metadata } from 'next'
import { LuSettings2 } from 'react-icons/lu'
import { Breadcrumb, ProductPagination, DiscountCard, DemoFilterDropdown, MegaProductFilter } from '@/components'
import DishesGrid, { FoundResultsCount } from './DishesGrid'

export const metadata: Metadata = {
  title: 'Dishes',
}

const ProductsGrid = () => {
  return (
    <>
      <Breadcrumb title="Dishes" subtitle="Dishes" />
      <section className="py-6 lg:py-8">
        <div className="container">
          <div className="">
            <div className="gap-6 lg:flex">
              <MegaProductFilter />

              <div className="relative lg:w-3/4">
                <div className="mb-10 flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
                  <div className="flex flex-wrap items-center gap-4 md:flex-nowrap">
                    <button
                      className="inline-flex items-center gap-4 rounded-full border border-default-200 px-4 py-2.5 text-sm text-default-950 transition-all lg:hidden xl:px-5"
                      data-hs-overlay="#filter_Offcanvas"
                      type="button"
                    >
                      Filter <LuSettings2 size={16} />
                    </button>
                    <FoundResultsCount />
                  </div>

                  <div className="flex items-center">
                    <DemoFilterDropdown filterOptions={['Latest', 'Featured', 'Rating', 'Popularity']} filterType="Sort By" />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  <div className="order-1 sm:col-span-2 xl:order-2">
                    <div className="order-1 h-full sm:col-span-2 xl:order-2">
                      <DiscountCard discount={'52% Discount'} link="/dishes" />
                    </div>
                  </div>

                  <DishesGrid />
                </div>
              </div>
            </div>
            <ProductPagination />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsGrid
