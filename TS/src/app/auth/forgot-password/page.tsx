import Link from 'next/link'
import { type Metadata } from 'next'
import ForgotPasswordForm from './ForgotPasswordForm'
import { AuthFormLayout } from '@/components'

export const metadata: Metadata = {
  title: 'Forgot Password',
}

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Back to{' '}
    <Link href="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </Link>
  </p>
)

const RecoverPassword = () => {
  return (
    <AuthFormLayout
      authTitle="Forgot Password"
      helpText="Enter your email address and we'll send you an email with instructions to reset your password."
      bottomLink={<BottomLink />}
    >
      <ForgotPasswordForm />
    </AuthFormLayout>
  )
}

export default RecoverPassword
