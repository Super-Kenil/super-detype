'use client'
import { useEffect, useRef, useState } from 'react'

const useLocalStorage = <T>(key: string | undefined, initialValue: T) => {
  const listenerRef = useRef<EventListenerOrEventListenerObject | null>(null)

  useEffect(() => {
    const handleStorageChange = () => {
      if (key) {
        const item = localStorage.getItem(key)
        if (item) {
          setStoredValue(JSON.parse(item))
        }
      }
    }

    listenerRef.current = handleStorageChange

    if (listenerRef.current) {
      window.addEventListener('storage', listenerRef.current, false)
    }

    return () => {
      if (listenerRef.current) {
        window.removeEventListener('storage', listenerRef.current, false)
      }
    }
  }, [key])

  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      let item = null
      if (key) {
        item = window.localStorage.getItem(key)
      }
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      if (key) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue] as const
}

export default useLocalStorage
