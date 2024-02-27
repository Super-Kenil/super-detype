'use client'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { TextFormInput } from '@/components'

const CouponCodeForm = () => {
  const contactFormSchema = yup.object({
    couponCode: yup.string().required('Please enter your coupon code'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })
  return (
    <div className="rounded-lg border border-default-200">
      <div className="border-b border-default-200 px-6 py-5">
        <h4 className="text-lg font-semibold text-default-800">Coupon Code</h4>
      </div>
      <div className="p-6">
        <form onSubmit={handleSubmit(() => {})}>
          <TextFormInput
            name="couponCode"
            className="block bg-transparent outline-none"
            placeholder="Enter Coupon Code"
            control={control}
            fullWidth
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg border border-primary bg-primary px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-all duration-500 hover:bg-primary-500"
            >
              Apply Coupon
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CouponCodeForm
