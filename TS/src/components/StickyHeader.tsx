'use client'
import { type ReactNode } from 'react'
import { useScrollEvent } from '@/hooks'
import { cn } from '@/utils'

const StickyHeader = ({ children }: { children: ReactNode }) => {
  const { scrollY } = useScrollEvent()

  return (
    <header
      className={cn(
        'sticky inset-x-0 top-0 z-40 w-full items-center backdrop-blur transition-all duration-300',
        scrollY >= 80 ? 'bg-white shadow-none dark:bg-default-50 lg:shadow-md' : 'bg-transparent'
      )}
    >
      {children}
    </header>
  )
}

export default StickyHeader
