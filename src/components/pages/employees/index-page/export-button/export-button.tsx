import CaretIcon from '@/components/icons/caret-icon'
import Button from '@/components/ui/button/button'
import Spinner from '@/components/ui/spinner/spinner'
import { useAppDispatch } from '@/hooks'
import { fetchEmployeesSheetAction } from '@/store/employee-slice/employees-api-actions'
import dayjs from 'dayjs'
import { useState } from 'react'
import * as XLSX from 'xlsx'

function ExportButton(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleButtonClick = () => {
    setIsLoading(true)
    dispatch(fetchEmployeesSheetAction({
      successHandler(employees) {
        const sheetData = employees.map(({
          surname,
          name,
          patronymic,
          login,
          password,
          jobs,
          positions,
          departments,
          startedWorkAt,
          languages,
          details,
        }) => ({
          'ФИО': `${surname} ${name} ${patronymic ? patronymic : ''}`,
          'Логин': login,
          'Пароль': password,
          'Эл. почта': details?.email,
          'Телефон': `${details?.tel1 ? details?.tel1 : ''} ${details?.tel2 ? details?.tel2 : ''}`,
          'Начало работы': dayjs(startedWorkAt).format('D MMM YYYY').toString(),
          'Должность': jobs.map(({ title }) => title).join(', '),
          'Позиция': positions.map(({ title }) => title).join(', '),
          'Отдел/департамент': departments.map(({ title }) => title).join(', '),
          'Пол': details?.gender,
          'Дата рождения': details?.birthDate ? dayjs(details.birthDate).format('D MMM YYYY') : '',
          'Национальность': details?.nationality,
          'Гражданство': details?.citizenship,
          'Знание языков': languages.map(({ name }) => name).join(', '),
          'Семейное положение': details?.familyStatus,
          'Дети': details?.children?.map((child) => child).reverse().join(', '),
          'Адрес': details?.address,
        }))
        const wb = XLSX.utils.book_new()
        const ws = XLSX.utils.json_to_sheet(sheetData)

        XLSX.utils.book_append_sheet(wb, ws, 'employees')
        XLSX.writeFile(wb, 'employees_sheet.xlsx')
        setIsLoading(false)
      },
    }))
  }

  return (
    <Button
      type="button"
      onClick={handleButtonClick}
    >
      Экспорт {isLoading ? <Spinner /> : <CaretIcon />}
    </Button>
  )
}

export default ExportButton
