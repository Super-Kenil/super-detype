import Image from 'next/image'
import type { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { Poppins } from 'next/font/google'
import type { ReactNode } from 'react'
import { Toaster } from 'sonner'
import NextTopLoader from 'nextjs-toploader'
const AppProvidersWrapper = dynamic(() => import('@/components/AppProvidersWrapper'))
const BackToTop = dynamic(() => import('@/components/layout/BackToTop'), { ssr: false })

// styles
import '../assets/css/style.css'

const APP_NAME = 'Yum Next'
const APP_DEFAULT_TITLE = 'Yum Nextjs - Multipurpose Food Tailwind CSS Template'
const APP_TITLE_TEMPLATE = '%s | Yum Nextjs - Multipurpose Food Tailwind CSS Template'
const APP_DESCRIPTION = `Yum - Tailwind CSS Client & Admin Food Template - Retail Site Templates. Introducing "Yum", our latest food template, meticulously crafted with the power of Tailwind CSS 3. This template offers a comprehensive solution for both clients and administrators in the culinary world. For clients, it provides a seamless and delightful experience for ordering and enjoying their favourite meals. With a user-friendly interface and responsive design, it’s easy to explore menus, place orders, and savour delicious dishes from the comfort of their homes. For administrators, this template streamlines the management of the food business, from menu updates to order tracking, ensuring efficiency and success. Tailwind CSS 3 ensures that the template is not only functional but also beautifully designed. Experience the perfect blend of culinary excellence and cutting-edge design with "Yum", our Tailwind CSS 3 food template, where clients and admins unite for a delectable online dining experience.`

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700'],
  display: 'swap',
  subsets: ['devanagari'],
})

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  userScalable: true,
  width: 'device-width',
  viewportFit: 'cover',
  themeColor: '#F58220',
  colorScheme: 'light dark',
  interactiveWidget: 'resizes-content',
}

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    template: APP_TITLE_TEMPLATE,
    default: APP_DEFAULT_TITLE,
  },
  authors: {
    name: 'Coderthemes',
    url: 'https://coderthemes.com/',
  },
  description: APP_DESCRIPTION,
  keywords: ['Yum', 'Coderthemes', 'Food', 'Food Delivery', 'Nextjs', 'Tailwind', 'PWA'],
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    startupImage: ['/icon.png'],
  },
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{splashScreenStyles}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet" />
      </head>

      <body className={`${poppins.className} selection:bg-primary selection:text-white`}>
        <div id="splash-screen">
          <Image alt="Logo" width={355} height={83} src={'/logo-dark.png'} style={{ height: '10%', width: 'auto' }} />
        </div>
        <NextTopLoader color="#F58220" showSpinner={false} />
        <div id='__next_splash'>
          <AppProvidersWrapper>
            {children}
            <BackToTop />
            <Toaster richColors />
          </AppProvidersWrapper>
        </div>
      </body>
    </html>
  )
}
