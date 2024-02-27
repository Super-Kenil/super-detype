'use client'
import { usePathname, useRouter } from 'next/navigation'
import { type ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import NextTopLoader from 'nextjs-toploader'

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const { data: session, status } = useSession()
  const pathname = usePathname()

  if (status == 'unauthenticated') {
    router.replace(`/auth/login?redirectTo=${pathname}`)
    return null
  }

  if (session?.user) {
    if (session.user.role !== 'user') {
      router.replace(`/auth/login?redirectTo=${pathname}`)
      return null
    }
  }

  if (status == 'loading') {
    return <NextTopLoader color="#F58220" showSpinner={false} />
  }

  return <>{children}</>
}

export default Layout
