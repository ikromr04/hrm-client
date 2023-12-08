import TextLink from '@/components/ui/text-link/text-link'
import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'

function PhoneLink(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  if (!personalData) {
    return <></>
  }

  return (
    <TextLink href={`tel:${personalData.tel1 || personalData.tel2}`}>
      {personalData.tel1 || personalData.tel2}
    </TextLink>
  )
}

export default PhoneLink
