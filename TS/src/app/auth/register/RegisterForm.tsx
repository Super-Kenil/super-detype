'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { PasswordFormInput, TextFormInput } from '@/components'

const RegisterForm = () => {
  const registerFormSchema = yup.object({
    fullName: yup.string().required('Please enter your name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      fullName: 'Yum Coderthemes',
      email: 'user@demo.com',
      password: 'password',
    },
  })

  return (
    <form onSubmit={handleSubmit(() => null)}>
      <TextFormInput
        name="fullName"
        control={control}
        type="text"
        placeholder="Enter your name"
        containerClassName="mb-6"
        label="Full Name"
        fullWidth
      />

      <TextFormInput name="email" control={control} type="email" placeholder="Enter your email" containerClassName="mb-6" label="Email" fullWidth />

      <PasswordFormInput name="password" control={control} label="Password" containerClassName="mb-6" fullWidth />

      <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500">
        Register
      </button>
    </form>
  )
}

export default RegisterForm
