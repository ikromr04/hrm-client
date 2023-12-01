import { useAppSelector } from '../../../../../hooks'
import { getEmployeePersonalData } from '../../../../../store/employee-slice/employees-selector'
import TextLink from '../../../../ui/text-link/text-link'

function Tel2(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  if (!personalData?.tel2) {
    return <></>
  }

  return (
    <TextLink href={`tel:${personalData.tel2}`}>{personalData.tel2}</TextLink>
  )
}

export default Tel2
