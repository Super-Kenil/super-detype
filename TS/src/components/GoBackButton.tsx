'use client'
import { useRouter } from 'next/navigation'

const GoBackButton = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="w-1/2 rounded-lg bg-primary px-6 py-3 text-base font-medium capitalize text-white transition-all hover:bg-primary-500 lg:w-2/6"
    >
      Go Back
    </button>
  )
}

export default GoBackButton
