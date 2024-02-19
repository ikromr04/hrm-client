import { Employee } from '@/types/employees'
import DescriptionList from '../../description-list/description-list'
import { EmptyText, Section, SectionTitle } from './styled'
import { useAppSelector } from '@/hooks'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import { ReactNode } from 'react'

function Languages({
  employee
}: {
  employee: Employee
}): ReactNode {
  const filter = useAppSelector(getEmployeesFilter)

  if (!employee || !filter.languages.isShown) {
    return <></>
  }

  return (
    <Section>
      <SectionTitle>Знание языков</SectionTitle>
      {employee.languages.length > 0 
        ?
          <DescriptionList
            list={employee.languages.reduce((acc: { [key: string]: string }, language) => {
              acc[language.name] = language.level
              return acc
            }, {})}
            columns={2}
            detailedInverse />
        : <EmptyText small>Не заполнено</EmptyText>}
    </Section>
  )
}

export default Languages
