import BellIcon from '@/components/icons/bell-icon'
import { ReactNode } from 'react'
import { Button } from './styled'

function Notification(): ReactNode {
  return (
    <Button type="button">
      <BellIcon width={18} height={18} />
    </Button>
  )
}

export default Notification
