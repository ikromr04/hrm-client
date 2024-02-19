import { ReactNode } from 'react'
import { StyledIconsBox } from './styled'

function IconsBox({
  icon,
  color
}: {
  icon: ReactNode
  color?: string
}): ReactNode {
  return (
    <StyledIconsBox color={color}>{icon}</StyledIconsBox>
  )
}

export default IconsBox
