import { useAppSelector } from '../../../../hooks'
import { getEmployeePersonalData } from '../../../../store/employees-slice/employees-selector'
import TextLink from '../../../ui/text-link/text-link'

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
