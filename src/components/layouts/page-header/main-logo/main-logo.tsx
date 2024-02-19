import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { StyledLogo } from './styled'
import { AppRoute } from '@/const'

function MainLogo(): ReactNode {
  const location = useLocation()
  const href = location.pathname !== AppRoute.Home ? AppRoute.Home : ''

  return (
    <StyledLogo href={href} />
  )
}

export default MainLogo
