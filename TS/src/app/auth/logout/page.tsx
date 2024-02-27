'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import { AuthFormLayout } from '@/components'

const BottomLink = () => (
  <p className="mt-auto text-center text-default-950">
    Please come back and
    <Link href="/auth/login" className="ms-1 text-primary">
      <span className="font-medium">Login</span>
    </Link>
  </p>
)

const Logout = () => {
  useEffect(() => {
    async function logoutUser() {
      await signOut({ redirect: false })
    }
    logoutUser()
  }, [])

  return (
    <AuthFormLayout authTitle="Logout" helpText="We are Sorry to see you go, please come back soon. 😢" bottomLink={<BottomLink />}>
      <div></div>
    </AuthFormLayout>
  )
}

export default Logout
