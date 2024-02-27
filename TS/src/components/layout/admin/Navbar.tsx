import Image from 'next/image'
import Link from 'next/link'
import SimplebarReactClient from '@/components/SimplebarReactClient'
import { LuLogOut, LuUserCircle2, LuZap } from 'react-icons/lu'
import { logoDarkImg, logoLightImg, offerBgOtherImg } from '@/assets/data/images'
import VerticalMenu from './VerticalMenu'
import { getAdminVerticalMenuItems } from '@/helpers'

const MenuAdmin = () => {
  return (
    <div
      id="application-sidebar"
      className="hs-overlay fixed inset-y-0 start-0 z-60 hidden w-64 -translate-x-full transform overflow-y-auto border-e border-default-200 bg-white transition-all duration-300 hs-overlay-open:translate-x-0 dark:bg-default-50 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
    >
      <div className="sticky top-0 flex h-18 items-center justify-center border-b border-dashed border-default-200 px-6">
        <Link href="/home">
          <Image src={logoDarkImg} height={40} width={130} alt="logo" className="flex h-10 dark:hidden" placeholder="blur" priority />
          <Image src={logoLightImg} height={40} width={130} alt="logo" className="hidden h-10 dark:flex" placeholder="blur" priority />
        </Link>
      </div>

      <SimplebarReactClient className="h-[calc(100%-390px)]">
        <VerticalMenu menuItems={getAdminVerticalMenuItems()} />
      </SimplebarReactClient>

      <ul className="admin-menu flex flex-col gap-2 px-4 pt-10">
        <li className="menu-item">
          <div
            style={{ backgroundImage: `url(${offerBgOtherImg.src})` }}
            className="flex flex-col items-center rounded-md bg-primary/5 bg-cover bg-no-repeat p-4 text-center text-sm text-default-700"
          >
            <div className="-mt-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-default-100 bg-white text-primary shadow-lg dark:bg-default-50">
              <LuZap size={24} />
            </div>
            <p className="mb-4 text-sm text-default-700">🔥 Upgrade Your Plan. Find Out here</p>
            <button className="rounded bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white">
              Contact Support
            </button>
          </div>
        </li>

        <li className="menu-item">
          <Link className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-default-700 hover:bg-default-100" href="/admin/profile">
            <LuUserCircle2 size={20} />
            Profile
          </Link>
        </li>
        <li className="menu-item">
          <Link
            className="flex items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-red-500 hover:bg-red-400/10 hover:text-red-600"
            href="/auth/logout"
          >
            <LuLogOut size={20} />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuAdmin
