import Image from 'next/image'
import Link from 'next/link'
import { LuAlignJustify, LuSearch } from 'react-icons/lu'
import MaximizeScreen from './MaximizeScreen'
import LanguageDropdown from './LanguageDropdown'
import ProfileDropdown from './ProfileDropdown'
import NotificationDropdown from './NotificationDropdown'
import { logoDarkImg, logoLightImg } from '@/assets/data/images'
import { notificationsData } from '@/assets/data'

const TopbarAdmin = () => {
  return (
    <header className="sticky top-0 z-40 flex h-18 w-full border-b border-default-200 bg-white dark:bg-default-50 lg:ps-64">
      <nav className="flex w-full items-center gap-4 px-6">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-default-500 hover:text-default-600"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
          >
            <LuAlignJustify size={24} />
          </button>
        </div>

        <div className="flex lg:hidden">
          <Link href="/home">
            <Image src={logoDarkImg} height={40} width={130} alt="logo" className="flex h-10 w-full dark:hidden" placeholder="blur" priority />
            <Image src={logoLightImg} height={40} width={130} alt="logo" className="hidden h-10 w-full dark:flex" placeholder="blur" priority />
          </Link>
        </div>

        <div className="hidden lg:flex">
          <div className="relative hidden lg:flex">
            <input
              type="search"
              className="block w-64 rounded-full border-default-200 bg-default-50 py-2.5 pe-4 ps-12 text-sm text-default-600 focus:border-primary focus:ring-primary"
              placeholder="Search for items..."
            />
            <span className="absolute start-4 top-2.5">
              <LuSearch size={20} className="text-default-600" />
            </span>
          </div>
        </div>

        <div className="ms-auto flex items-center gap-4">
          <div className="hidden md:flex">
            <LanguageDropdown />
          </div>

          <div className="hidden lg:flex">
            <MaximizeScreen />
          </div>

          <div className="hidden md:flex">
            <NotificationDropdown notifications={notificationsData} />
          </div>

          <div className="flex">
            <ProfileDropdown />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default TopbarAdmin
