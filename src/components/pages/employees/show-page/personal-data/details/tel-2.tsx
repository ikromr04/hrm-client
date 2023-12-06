import TextLink from '@/components/ui/text-link/text-link'
import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'

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
