import { Link } from 'react-router-dom'
import { Process, ProcessInner, StyledProcesses } from './styled'
import IconsBox from '@/components/ui/icons-box/icons-box'
import UserPlusIcon from '@/components/icons/user-plus-icon'
import UserIcon from '@/components/icons/user-icon'
import UserMinusIcon from '@/components/icons/user-minus-icon'
import { ReactNode } from 'react'

function Processes(): ReactNode {
  return (
    <StyledProcesses>
      <Process tagName={Link} to="">
        <IconsBox icon={<UserPlusIcon width={24} height={24} />} />
        <ProcessInner>
          <b>0</b> Онбординг
        </ProcessInner>
      </Process>
      <Process tagName={Link} to="">
        <IconsBox icon={<UserIcon width={24} height={24} />} color="#ffb74d" />
        <ProcessInner>
          <b>0</b> На испытательном сроке
        </ProcessInner>
      </Process>
      <Process tagName={Link} to="">
        <IconsBox icon={<UserMinusIcon width={24} height={24} />} color="#ff5d5d" />
        <ProcessInner>
          <b>0</b> Офбординг
        </ProcessInner>
      </Process>
    </StyledProcesses>
  )
}

export default Processes
