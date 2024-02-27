import { AdminMenuItemType, MenuItemType } from '@/helpers'
import { LuHotel, LuLayoutGrid, LuListOrdered, LuSettings2, LuSoup, LuUserCog, LuUsers, LuWallet } from 'react-icons/lu'

const clientMenuItems: MenuItemType[] = [
  {
    key: 'home-page',
    label: 'Home',
    url: '/home',
    isTitle: true,
  },
  {
    key: 'dish',
    label: 'Dishes',
    isTitle: true,
    children: [
      {
        key: 'dish-grid',
        label: 'Dishes Grid',
        url: '/dishes',
        parentKey: 'dish',
      },
      {
        key: 'dish-list',
        label: 'Dishes List',
        url: '/dishes-list',
        parentKey: 'dish',
      },
      {
        key: 'dish-details',
        label: 'Dish Details',
        url: '/dishes/1001',
        parentKey: 'dish',
      },
    ],
  },
  {
    key: 'user-pages',
    label: 'Pages',
    isTitle: true,
    children: [
      {
        key: 'user-pages-account-cart',
        label: 'Cart',
        url: '/cart',
        parentKey: 'user-pages',
      },
      {
        key: 'user-pages-account-wishlist',
        label: 'Wishlist',
        url: '/wishlist',
        parentKey: 'user-pages',
      },
      {
        key: 'user-pages-checkout',
        label: 'Checkout',
        url: '/checkout',
        parentKey: 'user-pages',
      },
      {
        key: 'user-pages-faqs',
        label: 'FAQ',
        url: '/faqs',
        parentKey: 'user-pages',
      },
      {
        key: 'user-pages-contact-us',
        label: 'Contact Us',
        url: '/contact-us',
        parentKey: 'user-pages',
      },
      {
        key: 'user-pages-not-found',
        label: 'Error 404',
        url: '/not-found',
        parentKey: 'user-pages',
      },
      {
        key: 'auth-login',
        label: 'Login',
        url: '/auth/login',
        parentKey: 'user-pages',
      },
      {
        key: 'auth-register',
        label: 'Register',
        url: '/auth/register',
        parentKey: 'user-pages',
      },
      {
        key: 'auth-forgot-password',
        label: 'Forgot Password',
        url: '/auth/forgot-password',
        parentKey: 'user-pages',
      },
      {
        key: 'auth-reset-password',
        label: 'Reset Password',
        url: '/auth/reset-password',
        parentKey: 'user-pages',
      },
      {
        key: 'auth-logout',
        label: 'Logout',
        url: '/auth/logout',
        parentKey: 'user-pages',
      },
    ],
  },
  {
    key: 'admin-dashboard',
    label: 'Admin',
    url: '/admin/dashboard',
    isTitle: true,
  },
]

const megaMenuItem: MenuItemType = {
  key: 'mega-menu',
  label: 'Mega Menu',
  isTitle: true,
  isMega: true,
  children: [
    {
      key: 'mega-menu-1',
      label: 'Mega Menu',
      url: '/home',
      parentKey: 'mega-menu',
    },
  ],
}

const addMegaMenu = () => {
  const menuItems = [...clientMenuItems]
  menuItems.splice(2, 0, megaMenuItem)
  return menuItems
}

type FooterLink = {
  [title: string]: {
    name: string
    link?: string
  }[]
}

export const HORIZONTAL_MENU_ITEMS: MenuItemType[] = addMegaMenu()

export const CLIENT_VERTICAL_MENU_ITEMS: Omit<MenuItemType, 'isMega'>[] = clientMenuItems

export const ADMIN_VERTICAL_MENU_ITEMS: AdminMenuItemType[] = [
  {
    key: 'dashboard-page',
    label: 'Dashboard',
    icon: LuLayoutGrid,
    url: '/admin/dashboard',
    isTitle: true,
  },
  {
    key: 'manage-page',
    label: 'Manage',
    icon: LuSettings2,
    url: '/admin/manage',
    isTitle: true,
  },
  {
    key: 'orders',
    label: 'Orders',
    icon: LuListOrdered,
    isTitle: true,
    children: [
      {
        key: 'orders-list',
        label: 'Orders List',
        url: '/admin/orders',
        parentKey: 'orders',
      },
      {
        key: 'orders-details',
        label: 'Order Details',
        url: '/admin/orders/9f36ca',
        parentKey: 'orders',
      },
    ],
  },
  {
    key: 'customers',
    label: 'Customers',
    icon: LuUsers,
    isTitle: true,
    children: [
      {
        key: 'customers-list',
        label: 'Customers List',
        url: '/admin/customers',
        parentKey: 'customers',
      },
      {
        key: 'customers-details',
        label: 'Customer Details',
        url: '/admin/customers/701',
        parentKey: 'customers',
      },
      {
        key: 'customers-add',
        label: 'Add Customer',
        url: '/admin/add-customer',
        parentKey: 'customers',
      },
      {
        key: 'customers-edit',
        label: 'Edit Customer',
        url: '/admin/edit-customer',
        parentKey: 'customers',
      },
    ],
  },
  {
    key: 'restaurants',
    label: 'Restaurants',
    icon: LuHotel,
    isTitle: true,
    children: [
      {
        key: 'restaurants-list',
        label: 'Restaurants List',
        url: '/admin/restaurants',
        parentKey: 'restaurants',
      },
      {
        key: 'restaurants-details',
        label: 'Restaurant Details',
        url: '/admin/restaurants/901',
        parentKey: 'restaurants',
      },
      {
        key: 'restaurants-add',
        label: 'Add Restaurant',
        url: '/admin/add-restaurant',
        parentKey: 'restaurants',
      },
      {
        key: 'restaurants-edit',
        label: 'Edit Restaurant',
        url: '/admin/edit-restaurant',
        parentKey: 'restaurants',
      },
    ],
  },
  {
    key: 'dishes',
    label: 'Dishes',
    icon: LuSoup,
    isTitle: true,
    children: [
      {
        key: 'dishes-list',
        label: 'Dishes List',
        url: '/admin/dishes',
        parentKey: 'dishes',
      },
      {
        key: 'dishes-details',
        label: 'Dish Details',
        url: '/admin/dishes/1008',
        parentKey: 'dishes',
      },
      {
        key: 'dishes-add',
        label: 'Add Dish',
        url: '/admin/add-dish',
        parentKey: 'dishes',
      },
      {
        key: 'dishes-edit',
        label: 'Edit Dish',
        url: '/admin/edit-dish',
        parentKey: 'dishes',
      },
    ],
  },
  {
    key: 'sellers',
    label: 'Sellers',
    icon: LuUserCog,
    isTitle: true,
    children: [
      {
        key: 'sellers-list',
        label: 'Sellers List',
        url: '/admin/sellers',
        parentKey: 'sellers',
      },
      {
        key: 'sellers-details',
        label: 'Seller Details',
        url: '/admin/sellers/704',
        parentKey: 'sellers',
      },
      {
        key: 'sellers-add',
        label: 'Add Seller',
        url: '/admin/add-seller',
        parentKey: 'sellers',
      },
      {
        key: 'sellers-edit',
        label: 'Edit Seller',
        url: '/admin/edit-seller',
        parentKey: 'sellers',
      },
    ],
  },
  {
    key: 'wallet-page',
    label: 'Wallet',
    icon: LuWallet,
    url: '/admin/wallet',
    isTitle: true,
  },
]

export const FOOTER_LINKS: FooterLink = {
  About: [{ name: 'About Us' }, { name: 'Features' }, { name: 'News' }, { name: 'Careers' }, { name: 'Services' }],
  Company: [{ name: 'Our Team' }, { name: 'Partner with Us' }, { name: 'FAQs' }, { name: 'Blog' }],
  Support: [
    { name: 'About' },
    { name: 'Support Center' },
    { name: 'Feedback' },
    { name: 'Contact Us', link: '/contact-us' },
    { name: 'Accessibility' },
  ],
}
