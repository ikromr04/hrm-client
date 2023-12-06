import TextLink from '@/components/ui/text-link/text-link'
import { useAppSelector } from '@/hooks'
import { getEmployeePersonalData } from '@/store/employee-slice/employees-selector'

function Tel1(): JSX.Element {
  const personalData = useAppSelector(getEmployeePersonalData)

  if (!personalData?.tel1) {
    return <></>
  }

  return (
    <TextLink href={`tel:${personalData.tel1}`}>{personalData.tel1}</TextLink>
  )
}

export default Tel1
