import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useOnRouteChange = (callback: () => void): void => {
  const location = useLocation()

  useEffect(() => {
    callback()
  }, [location])
}
