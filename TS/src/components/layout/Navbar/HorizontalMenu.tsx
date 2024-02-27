'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { type MenuItemType, findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers'
import { cn } from '@/utils'
import MegaMenuDropdown from './MegaMenuDropdown'

type SubMenus = {
  item: MenuItemType
  linkClassName?: string
  activeMenuItems?: Array<string>
  toggleMenu?: (item: MenuItemType, status: boolean) => void
  className?: string
}

const MenuItemWithChildren = ({ item, linkClassName, activeMenuItems, toggleMenu }: SubMenus) => {
  const [open, setOpen] = useState(activeMenuItems!.includes(item.key))

  useEffect(() => {
    if (activeMenuItems) setOpen(activeMenuItems.includes(item.key))
  }, [activeMenuItems, item])

  const toggleMenuItem = () => {
    const status = !open
    setOpen(status)
    if (toggleMenu) toggleMenu(item, status)
    return false
  }

  return (
    <li>
      <div className="hs-dropdown relative inline-flex [--placement:bottom] [--trigger:hover]">
        <button
          className={cn(
            'hs-dropdown-toggle inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-default-700 after:absolute after:inset-0 hover:text-primary hover:after:-bottom-10 lg:text-base',
            { 'text-primary': activeMenuItems!.includes(item.key) }
          )}
          aria-expanded={open}
          data-menu-key={item.key}
          onClick={toggleMenuItem}
        >
          {item.label}
          <LuChevronDown className="ms-2 h-4 w-4" />
        </button>
        <div className="hs-dropdown-menu z-10 mt-4 hidden min-w-[200px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-lg transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
          <ul className="flex flex-col gap-1">
            {(item.children ?? []).map((child, idx) => {
              return (
                <Fragment key={idx}>
                  {child.children ? (
                    <MenuItemWithChildren
                      item={child}
                      toggleMenu={toggleMenu}
                      activeMenuItems={activeMenuItems}
                      linkClassName={cn(linkClassName, {
                        'text-primary': activeMenuItems?.includes(child.key),
                      })}
                    />
                  ) : (
                    <MenuItem
                      item={child}
                      className={''}
                      linkClassName={cn(linkClassName, {
                        'text-primary': activeMenuItems?.includes(child.key),
                      })}
                    />
                  )}
                </Fragment>
              )
            })}
          </ul>
        </div>
      </div>
    </li>
  )
}

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
  return (
    <li className={className}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  )
}

const MenuItemLink = ({ item, className }: SubMenus) => {
  return (
    <Link className={className} href={item.url ?? ''} target={item.target} data-menu-key={item.key}>
      {item.label}
    </Link>
  )
}

/**
 * Renders the application menu
 */
type AppMenuProps = {
  menuItems: MenuItemType[]
}

const HorizontalMenu = ({ menuItems }: AppMenuProps) => {
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([])

  const pathname = usePathname()

  const toggleMenu = (menuItem: MenuItemType, show: boolean) => {
    if (show) {
      setActiveMenuItems([
        menuItem['key'],
        // ...findAllParent(menuItems, menuItem),
      ])
    }
  }
  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname.replaceAll('', '')

    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt['key'], ...findAllParent(menuItems, activeMt)])
      }
    }
  }, [pathname, menuItems])

  useEffect(() => {
    if (menuItems && menuItems.length > 0) activeMenu()
  }, [activeMenu, menuItems])

  return (
    <ul className="menu relative hidden items-center justify-center lg:flex">
      {(menuItems ?? []).map((item) => {
        return (
          <Fragment key={item.key}>
            {item.isMega ? (
              <MegaMenuDropdown />
            ) : item.children ? (
              <MenuItemWithChildren
                item={item}
                toggleMenu={toggleMenu}
                activeMenuItems={activeMenuItems}
                linkClassName={cn(
                  'flex items-center font-normal text-default-600 py-2 px-3 transition-all hover:text-default-700 hover:bg-default-100 rounded'
                )}
              />
            ) : (
              <MenuItem
                item={item}
                linkClassName={cn(
                  'inline-flex items-center text-sm lg:text-base font-medium text-default-800 py-2 px-4 rounded-full hover:text-primary',
                  { 'text-primary': activeMenuItems.includes(item.key) }
                )}
                className={''}
              />
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default HorizontalMenu
