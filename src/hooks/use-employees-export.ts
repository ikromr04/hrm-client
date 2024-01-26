import { getEmployees } from '@/store/employee-slice/employees-selector'
import { useAppSelector } from '.'
import * as XLSX from 'xlsx'
import dayjs from 'dayjs'

export const useEmployeesExport = (): () => void => {
  const employees = useAppSelector(getEmployees)

  const sheetData = (employees || []).map(({
    name, surname, patronymic, startedWorkAt, login, positions, jobs, languages, details
  }) => ({
    'Начало работы': dayjs(startedWorkAt).format('D MMM YYYY').toString(),
    'ФИО': `${surname} ${name} ${patronymic ? patronymic : ''}`,
    'Логин': login,
    'Позиция': positions.map(({ title }) => title).join(', '),
    'Должность': jobs.map(({ title }) => title).join(', '),
    'Знание языков': languages.map(({ name }) => name).join(', '),
    'Дата рождения': details?.birthDate ? dayjs(details.birthDate).format('D MMM YYYY') : '',
    'Национальность': details?.nationality,
    'Гражданство': details?.citizenship,
    'Пол': details?.gender,
    'Эл. почта': details?.email,
    'Телефон': `${details?.tel1 ? details?.tel1 : ''} ${details?.tel2 ? details?.tel2 : ''}`,
    'Семейное положение': details?.familyStatus,
    'Дети': details?.children?.map((child) => child).reverse().join(', '),
    'Адрес': details?.address,
  }))

  const handleExport = (): void => {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(sheetData)

    XLSX.utils.book_append_sheet(wb, ws, 'employees')
    XLSX.writeFile(wb, 'employees_sheet.xlsx')
  }

  return handleExport
}
