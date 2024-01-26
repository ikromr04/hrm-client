import Checkbox from '@/components/ui/checkbox/checkbox'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployeesFilter } from '@/store/app-slice/app-selector'
import { setEmployeesFilterAction } from '@/store/app-slice/app-slice'
import { ChangeEvent } from 'react'
import Input from '@/components/ui/input/input'
import { FormElement } from '../styled'
import { EmployeesDetailsFilter } from '@/types/employees'
import Select from '@/components/ui/select/select'
import { FAMILY_STATUSES, GENDERS, NO_CHILDREN } from '@/const'
import MultiSelect from '@/components/ui/multi-select/multi-select'
import { getYears } from '@/utils/employees'

function DetailsFilter() {
  const filter = useAppSelector(getEmployeesFilter)
  const dispatch = useAppDispatch()

  const handleFilterChange = (
    name: keyof EmployeesDetailsFilter,
    key: 'isShown' | 'from' | 'to' | 'query' | 'quantity',
    value: boolean | Date | string | string[]
  ) => {
    if (name === 'isShown') {
      dispatch(setEmployeesFilterAction({
        ...filter,
        details: {
          ...filter.details,
          [key]: value
        }
      }))
      return
    }
    dispatch(setEmployeesFilterAction({
      ...filter,
      details: {
        ...filter.details,
        [name]: {
          ...filter.details[name],
          [key]: value,
        }
      }
    }))
  }

  return (
    <>
      <Checkbox
        bold
        large
        label="Персональные данные"
        checked={filter.details.isShown}
        onChange={(evt: ChangeEvent<HTMLInputElement>) =>
          handleFilterChange('isShown', 'isShown', evt.target.checked)} />

      <FormElement>
        <Checkbox
          label="Начало работы"
          checked={filter.details.startedWorkAt.isShown}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('startedWorkAt', 'isShown', evt.target.checked)} />
        <Input
          type="datetime-local"
          horizontal
          label="От:"
          value={filter.details.startedWorkAt.from}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('startedWorkAt', 'from', evt.target.value)} />
        <Input
          type="datetime-local"
          horizontal
          label="До:"
          value={filter.details.startedWorkAt.to}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('startedWorkAt', 'to', evt.target.value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Национальность"
          checked={filter.details.nationality.isShown}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('nationality', 'isShown', evt.target.checked)} />
        <Input
          type="search"
          value={filter.details.nationality.query}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('nationality', 'query', evt.target.value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Дата рождения"
          checked={filter.details.birthDate.isShown}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('birthDate', 'isShown', evt.target.checked)} />
        <Input
          type="datetime-local"
          horizontal
          label="От:"
          value={filter.details.birthDate.from}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('birthDate', 'from', evt.target.value)} />
        <Input
          type="datetime-local"
          horizontal
          label="До:"
          value={filter.details.birthDate.to}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('birthDate', 'to', evt.target.value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Пол"
          checked={filter.details.gender.isShown}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('gender', 'isShown', evt.target.checked)} />
        <Select
          options={[
            { value: '', label: 'Все' },
            ...GENDERS.map((gender) => ({ value: gender, label: gender }))
          ]}
          value={filter.details.gender.query}
          onChange={(value: string) =>
            handleFilterChange('gender', 'query', value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Гражданство"
          checked={filter.details.citizenship.isShown}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('citizenship', 'isShown', evt.target.checked)} />
        <Input
          type="search"
          value={filter.details.citizenship.query}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('citizenship', 'query', evt.target.value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Эл. почта"
          checked={filter.details.email.isShown}
          disabled
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('email', 'isShown', evt.target.checked)} />
        <Input
          type="search"
          value={filter.details.email.query}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('email', 'query', evt.target.value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Телефон"
          checked={filter.details.tel.isShown}
          disabled
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('tel', 'isShown', evt.target.checked)} />
        <Input
          type="search"
          value={filter.details.tel.query}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('tel', 'query', evt.target.value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Семейное положение"
          checked={filter.details.familyStatus.isShown}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('familyStatus', 'isShown', evt.target.checked)} />
        <Select
          options={[
            { value: '', label: 'Все' },
            ...FAMILY_STATUSES.map((status) => ({ value: status, label: status }))
          ]}
          value={filter.details.familyStatus.query}
          onChange={(value: string) =>
            handleFilterChange('familyStatus', 'query', value)} />
      </FormElement>

      <FormElement>
        <Checkbox
          label="Дети"
          checked={filter.details.children.isShown}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('children', 'isShown', evt.target.checked)} />
        <MultiSelect
          value={filter.details.children.query}
          label="Выберите год рождения"
          options={[
            { value: '', label: 'Все' },
            { value: NO_CHILDREN, label: NO_CHILDREN },
              ...getYears(1970).map((year) => ({ value: year, label: year }))
          ]}
          onChange={(value: string[]) =>
            handleFilterChange('children', 'query', value)} />
        <Input
          type="number"
          label="Количество детей:"
          horizontal
          min={1}
          width={160}
          value={filter.details.children.quantity || ''}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleFilterChange('children', 'quantity', evt.target.value)} />
      </FormElement>
    </>
  )
}

export default DetailsFilter