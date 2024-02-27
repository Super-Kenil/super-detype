'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { TextFormInput } from '@/components'

const ForgotPasswordForm = () => {
  const registerFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registerFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(() => null)}>
      <TextFormInput name="email" control={control} type="text" placeholder="Enter your email" label="Email" containerClassName="mb-6" fullWidth />
      <button className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500">
        Reset Password
      </button>
    </form>
  )
}

export default ForgotPasswordForm
