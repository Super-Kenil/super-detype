'use client'
import Link from 'next/link'
import { useState } from 'react'
import { cn } from '@/utils'

const menuItems = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'Demos',
    link: '#demo',
  },
  {
    name: 'Features',
    link: '#features',
  },
]

const TopMenu = () => {
  const [activeLink, setActiveLink] = useState(location.hash)

  return (
    <div className="relative mx-auto hidden flex-grow lg:block">
      <ul className="menu flex items-center justify-center">
        {menuItems.map((item) => (
          <li key={item.name} className="menu-item">
            <div className="flex items-center">
              <Link
                className={cn(
                  'inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-primary-400 hover:text-primary-600 dark:text-primary-600 dark:hover:text-primary lg:text-base',
                  { 'font-semibold text-primary-600 dark:text-primary': activeLink == item.link }
                )}
                onClick={() => setActiveLink(item.link)}
                href={item.link}
              >
                {item.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopMenu
