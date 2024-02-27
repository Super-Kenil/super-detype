import { type Metadata } from 'next'
import Link from 'next/link'
import { AuthFormLayout } from '@/components'
import ResetPasswordForm from './ResetPasswordForm'

export const metadata: Metadata = {
  title: 'Reset Password',
}

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Back to{' '}
    <Link href="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </Link>
  </p>
)

const ResetPassword = () => {
  return (
    <AuthFormLayout authTitle="Reset Password" helpText="Create a new strong password" bottomLink={<BottomLink />} hasThirdPartyAuth>
      <ResetPasswordForm />
    </AuthFormLayout>
  )
}

export default ResetPassword
