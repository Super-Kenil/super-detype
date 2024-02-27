import Image from 'next/image'
import { comboIconImg } from '@/assets/data'

const AddNewFoodCard = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-4 text-center">
        <div className="mx-auto mb-6 h-16 w-16">
          <Image src={comboIconImg} className="h-full max-w-full" alt="combo" />
        </div>
        <h4 className="mb-6 text-xl font-semibold text-default-950">Add new Best food now</h4>
        <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-10 py-4 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500">
          Add Food
        </button>
      </div>
    </div>
  )
}

export default AddNewFoodCard
