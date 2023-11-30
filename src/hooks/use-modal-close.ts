import { useEffect, useRef } from 'react'

export const useModalClose = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscapeKeydown = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        callback()
      }
    }
    const handleClickOutside = (evt: MouseEvent) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        callback()
      }
    }

    document.addEventListener('keydown', handleEscapeKeydown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscapeKeydown)
    }
  }, [callback])

  return ref
}
