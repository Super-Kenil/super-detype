import { type ReactNode } from 'react'
import { Footer, FooterLinks, Navbar } from '@/components'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterLinks />
      <Footer />
    </>
  )
}

export default Layout
