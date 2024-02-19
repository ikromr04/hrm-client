import { Employee } from '@/types/employees'
import DescriptionList from '../../description-list/description-list'
import { Section, SectionTitle } from './styled'
import dayjs from 'dayjs'
import { useAppSelector } from '@/hooks'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import TextLink from '../../text-link/text-link'
import { ReactNode } from 'react'

function Details({
  employee
}: {
  employee: Employee
}): ReactNode {
  const filter = useAppSelector(getEmployeesFilter)
  const { startedWorkAt, nationality, birthDate, gender, citizenship, email, tel, familyStatus, children } = filter.details
  const list: { [key: string]: string | undefined } = {}

  if (!employee || !filter.details.isShown) {
    return <></>
  }

  startedWorkAt.isShown &&
    Object.assign(list, { 'Начало работы': dayjs(employee.startedWorkAt).format('D MMM YYYY').toString() })
  nationality.isShown &&
    Object.assign(list, { 'Национальность': employee.details?.nationality })
  birthDate.isShown &&
    Object.assign(list, { 'Дата рождения': employee.details?.birthDate ? dayjs(employee.details.birthDate).format('D MMM YYYY') : '' })
  gender.isShown &&
    Object.assign(list, { 'Пол': employee.details?.gender })
  citizenship.isShown &&
    Object.assign(list, { 'Гражданство': employee.details?.citizenship })
  email.isShown &&
    Object.assign(list, { 'Эл. почта': <TextLink href={`mailto:${employee.details?.email}`}>{employee.details?.email}</TextLink> })
  tel.isShown &&
    Object.assign(list, { 'Телефон': <>
      {employee.details?.tel1 && <>
        <TextLink href={`tel:${employee.details?.tel1}`}>{employee.details?.tel1}</TextLink> <br />
      </>}
      {employee.details?.tel2 && <TextLink href={`tel:${employee.details?.tel2}`}>{employee.details?.tel2}</TextLink>}
    </>})
  familyStatus.isShown &&
    Object.assign(list, { 'Семейное положение': employee.details?.familyStatus })
  children.isShown &&
    Object.assign(list, { 'Дети': employee.details?.children?.map((child) => child).reverse().join(', ') })

  return (
    <Section>
      <SectionTitle>Персональные данные</SectionTitle>
      <DescriptionList list={list} columns={2} detailed />
    </Section>
  )
}

export default Details
