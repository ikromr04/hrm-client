import { useLocation } from 'react-router-dom'
import { StyledLogo } from './styled'
import { AppRoute } from '@/const'

function MainLogo() {
  const location = useLocation()
  const href = location.pathname !== AppRoute.Home ? AppRoute.Home : ''

  return (
    <StyledLogo href={href} />
  )
}

export default MainLogo