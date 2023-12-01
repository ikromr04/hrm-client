import { LinksWrapper } from './styled'
import EmailLink from './email-link'
import PhoneLink from './phone-link'
import StartedWorkAt from './started-work-at'
import WorkTime from './work-time'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import IconsBox from '@/components/ui/icons-box/icons-box'
import EnvelopeIcon from '@/components/icons/envelope-icon'
import MobileIcon from '@/components/icons/mobile-icon'
import BoxInner from '@/components/ui/box-inner/box-inner'
import DescriptionList from '@/components/ui/description-list/description-list'

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

export default EmployeeInfo
