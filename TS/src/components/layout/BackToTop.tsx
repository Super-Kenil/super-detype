'use client'
import { LuChevronUp, LuMoon, LuSun } from 'react-icons/lu'
import { cn } from '@/utils'
import { useScrollEvent } from '@/hooks'
import { useLayoutContext } from '@/context'

const BackToTop = () => {
  const { scrollY } = useScrollEvent()

  const { themeMode, updateTheme } = useLayoutContext()

  const toggleThemeMode = () => {
    updateTheme(themeMode == 'light' ? 'dark' : 'light')
  }

  return (
    <div className="fixed bottom-18 end-5 z-10 flex flex-col items-center rounded-full bg-primary/25 lg:bottom-5">
      <button
        className={cn('z-10 flex w-8 items-center justify-center transition-all duration-500', scrollY >= 72 ? 'h-8' : 'h-0 translate-y-5 opacity-0')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <LuChevronUp size={20} className="mt-1 text-primary-500" />
      </button>
      <button className="z-20 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white" onClick={toggleThemeMode}>
        {themeMode == 'dark' ? <LuSun size={20} /> : <LuMoon size={20} />}
      </button>
    </div>
  )
}

export default BackToTop
