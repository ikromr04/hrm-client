import { StyledIconsBox } from './styled'

type IconsBoxProps = {
  icon: JSX.Element
  color?: string
}

function IconsBox({ icon, color }: IconsBoxProps): JSX.Element {
  return (
    <StyledIconsBox color={color}>{icon}</StyledIconsBox>
  )
}

export default IconsBox
