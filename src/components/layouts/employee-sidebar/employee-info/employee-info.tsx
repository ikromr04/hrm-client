import EnvelopeIcon from '../../../icons/envelope-icon'
import MobileIcon from '../../../icons/mobile-icon'
import DescriptionList from '../../../ui/description-list/description-list'
import IconsBox from '../../../ui/icons-box/icons-box'
import { LinksWrapper } from './styled'
import Box from '../../../ui/box/box'
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar'
import BoxInner from '../../../ui/box-inner/box-inner'
import { memo } from 'react'
import EmailLink from './email-link'
import PhoneLink from './phone-link'
import StartedWorkAt from './started-work-at'
import WorkTime from './work-time'

function EmployeeInfo(): JSX.Element {
  return (
    <Box>
      <BoxToolbar>
        <LinksWrapper>
          <IconsBox icon={<EnvelopeIcon width={16} height={16} />} />
          <EmailLink />
        </LinksWrapper>

        <LinksWrapper>
          <IconsBox icon={<MobileIcon width={16} height={16} />} />
          <PhoneLink />
        </LinksWrapper>
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Дата найма': <StartedWorkAt />,
            'Срок работы': <WorkTime />,
          }}
          detailed
        />
      </BoxInner>
    </Box>
  )
}

export default memo(EmployeeInfo)
