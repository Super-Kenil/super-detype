import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BreadcrumbAdmin, DishDetailsSwiper, ProductDetailView } from '@/components'
import { getDishById } from '@/helpers'

type ParamsDishId = {
  params: {
    adminDishId: string
  }
}

export const generateMetadata = async ({ params }: ParamsDishId): Promise<Metadata> => {
  const dish = await getDishById(Number(params.adminDishId))

  return { title: dish?.name ?? undefined }
}

const DishDetails = async ({ params }: ParamsDishId) => {
  const dish = await getDishById(Number(params.adminDishId))

  if (!dish) notFound()

  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title={dish.name} subtitle="Dishes" link="/admin/dishes" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg border border-default-200 p-6">
            <DishDetailsSwiper images={dish.images} />
          </div>
          <div className="rounded-lg border border-default-200 p-6">
            <ProductDetailView dish={dish} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DishDetails
