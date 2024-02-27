import type { DemoFeatureType } from '@/types/other'

const FeatureCard = ({ feature }: { feature: DemoFeatureType }) => {
  const Icon = feature.icon
  return (
    <div className="rounded-xl border border-default-200 bg-white transition-all duration-300 hover:shadow-lg dark:bg-default-50">
      <div className="p-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="shrink">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 text-primary-600">
              <Icon size={24} />
            </div>
          </div>
          <div className="grow">
            <h4 className="mb-2 text-lg font-semibold text-default-950">{feature.title}</h4>
            <p className="text-sm font-medium text-default-600">{feature.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
