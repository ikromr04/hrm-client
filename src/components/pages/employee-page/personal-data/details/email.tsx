import { useAppSelector } from '../../../../../hooks'
import { getEmployeePersonalData } from '../../../../../store/employees-slice/employees-selector'
import TextLink from '../../../../ui/text-link/text-link'

function Email(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  if (!personalData?.email) {
    return <></>
  }

  return (
    <TextLink href={`mailto:${personalData.email}`}>{personalData.email}</TextLink>
  )
}

export default Email
