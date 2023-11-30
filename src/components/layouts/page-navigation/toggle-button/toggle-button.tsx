import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { getNavigationCollapsedState } from '../../../../store/app-slice/job-selector'
import { StyledButton } from './styled'
import ArrowLeftIcon from '../../../icons/arrow-left-icon'
import { toggleNavigationAction } from '../../../../store/app-slice/app-slice'

function ToggleButton(): JSX.Element {
  const isCollapsed = useAppSelector(getNavigationCollapsedState)
  const dispatch = useAppDispatch()

  return (
    <StyledButton
      onClick={() => dispatch(toggleNavigationAction())}
      type="button"
      isCollapsed={isCollapsed}
    >
      <ArrowLeftIcon width={16} height={16} /> Свернуть
    </StyledButton>
  )
}

export default ToggleButton
