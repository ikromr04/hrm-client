import { BaseSyntheticEvent, Dispatch, ReactNode, SetStateAction } from 'react'
import { Input } from './styled'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { DataTableRow } from '@/components/ui/data-table/data-table'
import { Filter } from '../equipments-table'

function Filters({
  fieldName,
  filter,
  setFilter,
}: {
  fieldName: keyof DataTableRow
  filter: Filter
  setFilter: Dispatch<SetStateAction<Filter>>
}): ReactNode {
  useOutsideClick(() => setFilter((prevFilter) => ({
    ...prevFilter,
    fieldName: ''
  })))

  const handleSearchChange = (evt: BaseSyntheticEvent): void => setFilter((prevFilter) => ({
    ...prevFilter,
    fieldName,
    query: evt.target.value.toLowerCase().trim()
  }))

  return (
    <Input
      type="search"
      placeholder="Поиск"
      value={fieldName === filter.fieldName ? filter.query : ''}
      onChange={handleSearchChange} />
  )
}

export default Filters
