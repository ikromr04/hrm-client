import { LinksWrapper, Sidebar } from './styled'
import EmployeeLanguages from './employee-languages/employee-languages'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import IconsBox from '@/components/ui/icons-box/icons-box'
import EnvelopeIcon from '@/components/icons/envelope-icon'
import TextLink from '@/components/ui/text-link/text-link'
import MobileIcon from '@/components/icons/mobile-icon'
import BoxInner from '@/components/ui/box-inner/box-inner'
import DescriptionList from '@/components/ui/description-list/description-list'
import dayjs from 'dayjs';
import { useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import { getWorkTime } from '@/utils/employees'

function EmployeeSidebar(): JSX.Element {
  const employee = useAppSelector(getEmployee)

  if (!employee) {
    return <></>
  }

  return (
    <Sidebar>
      <Box>
        <BoxToolbar>
          <LinksWrapper>
            <IconsBox icon={<EnvelopeIcon />} />
            <TextLink href={`mailto:${employee.details?.email}`}>
              {employee.details?.email}
            </TextLink>
          </LinksWrapper>

          <LinksWrapper>
            <IconsBox icon={<MobileIcon />} />
            <TextLink href={`tel:${employee.details?.tel1 || employee.details?.tel2}`}>
              {employee.details?.tel1 || employee.details?.tel2}
            </TextLink>
          </LinksWrapper>
        </BoxToolbar>

        <BoxInner>
          <DescriptionList
            list={{
              'Дата найма': dayjs(employee.startedWorkAt).format('D MMM YYYY'),
              'Срок работы': getWorkTime(employee.startedWorkAt),
            }}
            detailed
          />
        </BoxInner>
      </Box>

      <EmployeeLanguages />
    </Sidebar>
  )
}

export default EmployeeSidebar
