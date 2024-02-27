import { HTMLAttributeAnchorTarget } from 'react'
import { type IconType } from 'react-icons'
import { ADMIN_VERTICAL_MENU_ITEMS, CLIENT_VERTICAL_MENU_ITEMS, HORIZONTAL_MENU_ITEMS } from '@/assets/data'

export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  url?: string
  target?: HTMLAttributeAnchorTarget
  children?: MenuItemType[]
  parentKey?: string
  isMega?: boolean
}

export type AdminMenuItemType = Omit<MenuItemType, 'isMega'> & {
  icon?: IconType
}

const getClientVerticalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return CLIENT_VERTICAL_MENU_ITEMS
}

const getAdminVerticalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return ADMIN_VERTICAL_MENU_ITEMS
}

const getHorizontalMenuItems = () => {
  // NOTE - You can fetch from server and return here as well
  return HORIZONTAL_MENU_ITEMS
}

const findAllParent = (menuItems: MenuItemType[], menuItem: MenuItemType): string[] => {
  let parents: string[] = []
  const parent = findMenuItem(menuItems, menuItem.parentKey)

  if (parent) {
    parents.push(parent.key)
    if (parent.parentKey) {
      parents = [...parents, ...findAllParent(menuItems, parent)]
    }
  }
  return parents
}

const getMenuItemFromURL = (items: MenuItemType | MenuItemType[], url: string): MenuItemType | undefined => {
  if (items instanceof Array) {
    for (const item of items) {
      const foundItem = getMenuItemFromURL(item, url)
      if (foundItem) return foundItem
    }
  } else {
    if (items.url == url) return items
    if (items.children != null) {
      for (const item of items.children) {
        if (item.url == url) return item
      }
    }
  }
}

const findMenuItem = (menuItems: MenuItemType[] | undefined, menuItemKey: MenuItemType['key'] | undefined): MenuItemType | null => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i]
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey)
      if (found) return found
    }
  }
  return null
}

export { getHorizontalMenuItems, getClientVerticalMenuItems, getAdminVerticalMenuItems, findAllParent, findMenuItem, getMenuItemFromURL }
