import { useLocation } from 'react-router-dom'
import { StyledLogo } from './styled'
import { AppRoute } from '@/const'

function Logo() {
  const location = useLocation()
  const href = location.pathname !== AppRoute.Main ? AppRoute.Main : ''

  return (
    <StyledLogo href={href} />
  )
}

export default Logo