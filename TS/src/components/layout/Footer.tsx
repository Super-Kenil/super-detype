import Link from 'next/link'
import { LuHeart } from 'react-icons/lu'
import { cn } from '@/utils'
import FloatingSearchBar from './Navbar/FloatingSearchBar'

const Footer = ({ hideLinks }: { hideLinks?: boolean }) => {
  return (
    <footer className={cn('absolute w-full border-t border-default-200 p-6', hideLinks ? 'lg:ps-64' : 'lg:ps-8')}>
      <div className={cn('container', hideLinks && 'ms-2')}>
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <p className="text-default-600">
            Designed, crafted and coded with <LuHeart size={16} className="inline fill-red-500 text-red-500" /> by Coderthemes.com
          </p>

          {!hideLinks && (
            <div className="flex justify-end gap-6">
              <Link href="" className="font-medium text-default-500">
                Terms
              </Link>
              <Link href="" className="font-medium text-default-500">
                Privacy
              </Link>
              <Link href="" className="font-medium text-default-500">
                Cookies
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* <FloatingSearchBar /> */}
    </footer>
  )
}

export default Footer
