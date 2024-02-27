import Link from 'next/link'
import { type Metadata } from 'next'
import { AuthFormLayout } from '@/components'
import RegisterForm from './RegisterForm'

export const metadata: Metadata = {
  title: 'Register',
}

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Already have an account ?{' '}
    <Link href="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </Link>
  </p>
)

const Register = () => {
  return (
    <AuthFormLayout
      authTitle="Register"
      helpText="Don't have an account? Create your account, it takes less than a minute at Yum"
      bottomLink={<BottomLink />}
      hasThirdPartyAuth
    >
      <RegisterForm />
    </AuthFormLayout>
  )
}

export default Register
