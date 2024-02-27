'use client'
import { usePathname, useRouter } from 'next/navigation'

const FilterResetButton = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(pathname)}
      type="reset"
      className="inline-flex w-full items-center justify-center rounded border border-primary bg-primary px-6 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary focus:ring focus:ring-primary/50"
    >
      Reset
    </button>
  )
}

export default FilterResetButton
