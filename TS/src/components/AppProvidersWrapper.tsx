'use client'
import dynamic from 'next/dynamic'
import { type ReactNode, useEffect } from 'react'
import { SessionProvider } from 'next-auth/react'
import { FilterProvider, LayoutProvider } from '@/context'
const ShopProvider = dynamic(() => import('@/context/useShoppingContext'), { ssr: false })

const AppProvidersWrapper = ({ children }: { children: ReactNode }) => {
  const handleChangeTitle = () => {
    if (document.visibilityState == 'hidden') document.title = 'Please come back :-('
    else document.title = 'Yum Nextjs - Multipurpose Food Tailwind CSS Template'
  }

  useEffect(() => {
    if (document) {
      const e = document.querySelector<HTMLDivElement>('#__next_splash')
      if (e?.hasChildNodes()) {
        document.querySelector('#splash-screen')?.classList.add('remove')
      }
      e?.addEventListener('DOMNodeInserted', () => {
        document.querySelector('#splash-screen')?.classList.add('remove')
      })
    }

    import('preline')

    document.addEventListener('visibilitychange', handleChangeTitle)
    return () => {
      document.removeEventListener('visibilitychange', handleChangeTitle)
    }
  }, [])

  return (
    <LayoutProvider>
      <SessionProvider>
        <ShopProvider>
          <FilterProvider>{children}</FilterProvider>
        </ShopProvider>
      </SessionProvider>
    </LayoutProvider>
  )
}
export default AppProvidersWrapper
