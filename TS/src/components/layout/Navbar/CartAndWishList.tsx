'use client'
import Link from 'next/link'
import { LuHeart, LuShoppingCart } from 'react-icons/lu'
import { useShoppingContext } from '@/context'

const CartAndWishList = () => {
  const { cartItems, wishlists } = useShoppingContext()
  return (
    <>
      <li className="menu-item flex">
        <Link href="/cart" className="relative flex text-base text-default-600 transition-all hover:text-primary">
          <LuShoppingCart size={20} />
          <span className="absolute -top-2.5 end-0 z-10 inline-flex h-5 w-5 translate-x-1/2 transform items-center justify-center rounded-full bg-orange-500 p-1 text-xs font-bold leading-none text-red-100">
            {cartItems.length}
          </span>
        </Link>
      </li>
      <li className="menu-item flex">
        <Link href="/wishlist" className="relative flex text-base text-default-600 transition-all hover:text-primary">
          <LuHeart size={20} className="fill-red-500  text-red-500" />
          <span className="absolute -top-2.5 end-0 z-10 inline-flex h-5 w-5 translate-x-1/2 transform items-center justify-center rounded-full bg-orange-500 p-1 text-xs font-bold leading-none text-red-100">
            {wishlists.length}
          </span>
        </Link>
      </li>
    </>
  )
}

export default CartAndWishList
