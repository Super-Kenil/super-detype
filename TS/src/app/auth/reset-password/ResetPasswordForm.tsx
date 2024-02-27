'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordFormInput } from '@/components'

const ResetPasswordForm = () => {
  const registerFormSchema = yup.object({
    oldPassword: yup.string().required('Please enter your old password'),
    newPassword: yup
      .string()
      .notOneOf([yup.ref('oldPassword')], 'New password should not be same as current password')
      .required('Please enter your new password'),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref('newPassword')], 'Confirm Password does not match the new Password')
      .required('Please enter your new password again'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registerFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(() => null)}>
      <PasswordFormInput
        name="oldPassword"
        control={control}
        label="Current Password"
        labelClassName="block text-sm font-medium text-default-900 mb-2"
        containerClassName="mb-6"
        fullWidth
      />

      <PasswordFormInput
        name="newPassword"
        control={control}
        label="New Password"
        labelClassName="block text-sm font-medium text-default-900 mb-2"
        containerClassName="mb-6"
        fullWidth
      />

      <PasswordFormInput
        name="confirmNewPassword"
        control={control}
        label="Confirm New Password"
        labelClassName="block text-sm font-medium text-default-900 mb-2"
        containerClassName="mb-6"
        fullWidth
      />

      <button type="submit" className="w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500">
        Reset Password
      </button>
    </form>
  )
}

export default ResetPasswordForm
