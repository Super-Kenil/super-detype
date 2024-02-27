'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordFormInput } from '@/components'

const CredentialsManagementForm = () => {
  const credentialsManagementFormSchema = yup.object({
    currentPassword: yup.string().required('Please enter your current password'),
    newPassword: yup.string().required('Please enter your new password'),
    confirmPassword: yup.string().oneOf([yup.ref('newPassword'), ''], 'Passwords must match'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(credentialsManagementFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <h4 className="mb-4 text-xl font-medium text-default-900">Change Password</h4>
      <PasswordFormInput
        name="currentPassword"
        label="Current Password"
        containerClassName="mb-4"
        placeholder="Enter your password"
        control={control}
        fullWidth
      />
      <PasswordFormInput
        name="newPassword"
        label="New Password"
        containerClassName="mb-4"
        placeholder="Enter your new password"
        control={control}
        fullWidth
      />
      <PasswordFormInput
        name="confirmPassword"
        label="Confirm Password"
        containerClassName="mb-4"
        placeholder="Enter your confirm password"
        control={control}
        fullWidth
      />
      <div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200  hover:bg-primary-500"
        >
          Save Changes
        </button>
      </div>
    </form>
  )
}

export default CredentialsManagementForm
