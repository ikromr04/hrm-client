import { useAppDispatch, useAppSelector } from '@/hooks'
import { StyledButton } from './styled'
import { getNavigationCollapsedState } from '@/store/app-slice/app-selector'
import { toggleNavigationAction } from '@/store/app-slice/app-slice'
import ArrowLeftIcon from '@/components/icons/arrow-left-icon'

function ToggleButton(): JSX.Element {
  const isCollapsed = useAppSelector(getNavigationCollapsedState)
  const dispatch = useAppDispatch()

  return (
    <StyledButton
      onClick={() => dispatch(toggleNavigationAction())}
      type="button"
      isCollapsed={isCollapsed}
    >
      <ArrowLeftIcon /> Свернуть
    </StyledButton>
  )
}

export default ToggleButton
