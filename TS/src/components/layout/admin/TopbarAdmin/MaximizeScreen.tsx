'use client'
import { useState } from 'react'
import { LuMaximize, LuMinimize } from 'react-icons/lu'

const MaximizeScreen = () => {
  const [fullScreenOn, setFullScreenOn] = useState(false)

  /*
   * toggle full screen mode
   */
  const toggleFullScreen = () => {
    const document: any = window.document
    if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen()
      }
      setFullScreenOn(true)
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
      setFullScreenOn(false)
    }
  }

  return (
    <button
      onClick={toggleFullScreen}
      className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center gap-2 rounded-full bg-default-100 align-middle text-xs font-medium text-default-700 transition-all hover:text-primary"
    >
      {fullScreenOn ? <LuMinimize size={24} /> : <LuMaximize size={24} />}
    </button>
  )
}

export default MaximizeScreen
