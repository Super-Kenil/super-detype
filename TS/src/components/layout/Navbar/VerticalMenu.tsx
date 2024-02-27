'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { LuChevronDown } from 'react-icons/lu'
import { type MenuItemType, findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers'
import { cn } from '@/utils'

type SubMenus = {
  item: MenuItemType
  linkClassName?: string
  activeMenuItems?: Array<string>
  toggleMenu?: (item: MenuItemType, status: boolean) => void
  className?: string
}

const MenuItemWithChildren = ({ item, linkClassName, activeMenuItems, toggleMenu, className }: SubMenus) => {
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
    <li className={className}>
      <button
        className={cn(
          'hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-md px-2.5 py-2 text-sm font-medium text-default-700 hover:bg-default-100 hs-accordion-active:bg-default-100 hs-accordion-active:text-primary',
          { 'text-primary': activeMenuItems!.includes(item.key) }
        )}
        aria-expanded={open}
        data-menu-key={item.key}
        onClick={toggleMenuItem}
      >
        {item.label}
        <LuChevronDown size={20} className="ms-auto h-5 w-5 transition-all hs-accordion-active:rotate-180" />
      </button>
      <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height]">
        <ul className="ps-2 pt-2">
          {(item.children ?? []).map((child, idx) => {
            return (
              <Fragment key={idx}>
                {child.children ? (
                  <MenuItemWithChildren
                    item={child}
                    toggleMenu={toggleMenu}
                    className="hs-accordion"
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
const VerticalMenu = ({ menuItems }: { menuItems: MenuItemType[] }) => {
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
    <ul className="space-y-2.5">
      {(menuItems ?? []).map((item) => {
        return (
          <Fragment key={item.key}>
            {item.children ? (
              <MenuItemWithChildren
                item={item}
                toggleMenu={toggleMenu}
                className="hs-accordion"
                activeMenuItems={activeMenuItems}
                linkClassName={cn('flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100')}
              />
            ) : (
              <MenuItem
                item={item}
                linkClassName={cn('flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100', {
                  'text-primary': activeMenuItems.includes(item.key),
                })}
                className=""
              />
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default VerticalMenu
