import TextLink from '@/components/ui/text-link/text-link'
import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'

function EmailLink(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  if (!personalData) {
    return <></>
  }

  return (
    <TextLink href={`mailto:${personalData.email}`}>{personalData.email}</TextLink>
  )
}

export default EmailLink
