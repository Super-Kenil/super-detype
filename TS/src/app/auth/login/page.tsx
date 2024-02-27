import Link from 'next/link'
import { type Metadata } from 'next'
import LoginForm from './LoginForm'
import { AuthFormLayout } from '@/components'

export const metadata: Metadata = {
  title: 'Login',
}

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Don’t have an account ?{' '}
    <Link href="/auth/register" className="ms-1 text-primary">
      <span className="font-medium">Register</span>
    </Link>
  </p>
)

const Login = () => {
  return (
    <AuthFormLayout authTitle="Login" helpText="Enter your credentials to access Yum." bottomLink={<BottomLink />} hasThirdPartyAuth>
      <LoginForm />
    </AuthFormLayout>
  )
}

export default Login
