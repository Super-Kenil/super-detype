import { useCallback, useState } from 'react'

const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const show = useCallback(() => setIsOpen(true), [])
  const hide = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return { isOpen, toggle, show, hide }
}

export default useToggle
