import Image from 'next/image'
import Link from 'next/link'
import { currentCurrency } from '@/common'
import { frenchImg, usaImg, germanyImg, spainImg } from '@/assets/data/images'

const OfferAdBanner = () => {
  return (
    <div className="z-20 hidden h-8 items-center bg-primary-950 text-white lg:flex">
      <div className="container">
        <nav className="grid items-center gap-4 lg:grid-cols-3">
          <div className="relative flex">
            <div className="hs-dropdown relative inline-flex [--placement:bottom] [--trigger:hover]">
              <button className="hs-dropdown-toggle relative flex items-center text-base after:absolute after:inset-0 hover:after:-bottom-10">
                <Image alt="Image" height={14} width={21} className="me-3 h-3.5" src={usaImg} />
                <span className="text-xs font-medium">English (USA)</span>
              </button>
              <div className="hs-dropdown-menu z-50 mt-4 hidden min-w-[140px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
                <ul className="flex flex-col gap-1">
                  <li>
                    <button className="flex w-full items-center gap-2 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">
                      <Image src={usaImg} height={16} width={24} alt="flag" className="h-4" />
                      English
                    </button>
                  </li>
                  <li>
                    <button className="flex w-full items-center gap-2 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">
                      <Image src={frenchImg} height={16} width={24} alt="flag" className="h-4" /> French
                    </button>
                  </li>
                  <li>
                    <button className="flex w-full items-center gap-2 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">
                      <Image src={germanyImg} height={16} width={24} alt="flag" className="h-4" />
                      German
                    </button>
                  </li>
                  <li>
                    <button className="flex w-full items-center gap-2 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">
                      <Image src={spainImg} height={16} width={24} alt="flag" className="h-4" /> Spanish
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h5 className="text-center text-sm text-primary-50">
            Free Delivery Over {currentCurrency}50{' '}
            <Link href="" className="font-semibold underline">
              Claim Offer
            </Link>
          </h5>
          <ul className="flex items-center justify-end gap-4">
            <li className="menu-item flex">
              <Link className="text-sm hover:text-primary" href="/faqs">
                Help
              </Link>
            </li>
            <li className="menu-item flex">
              <Link className="text-sm hover:text-primary" href="/contact-us">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default OfferAdBanner
