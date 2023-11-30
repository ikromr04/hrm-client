import { Link } from 'react-router-dom'
import UserPlusIcon from '../../../icons/user-plus-icon'
import IconsBox from '../../../ui/icons-box/icons-box'
import { Process, ProcessInner, StyledProcesses } from './styled'
import UserIcon from '../../../icons/user-icon'
import UserMinusIcon from '../../../icons/user-minus-icon'

function Processes(): JSX.Element {
  return (
    <StyledProcesses>
      <Process tagName={Link} to="">
        <IconsBox icon={<UserPlusIcon width={24} height={24} />} />
        <ProcessInner>
          <b>0</b>
          Онбординг
        </ProcessInner>
      </Process>
      <Process tagName={Link} to="">
        <IconsBox icon={<UserIcon width={24} height={24} />} color="#ffb74d" />
        <ProcessInner>
          <b>0</b>
          На испытательном сроке
        </ProcessInner>
      </Process>
      <Process tagName={Link} to="">
        <IconsBox icon={<UserMinusIcon width={24} height={24} />} color="#ff5d5d" />
        <ProcessInner>
          <b>0</b>
          Офбординг
        </ProcessInner>
      </Process>
    </StyledProcesses>
  )
}

export default Processes
