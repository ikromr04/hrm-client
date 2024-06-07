import PrivateRoute from '@/components/private-route/private-route'
import { useEffect, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import { Avatar, CV, EmployeeDetail, EmployeeName, EmployeePositions, ExportButton, Header, HeaderInner } from './styled'
import MapPin from '@/components/icons/map-pin-icon'
import BriefcaseIcon from '@/components/icons/briefcase-icon'
import Accent from '@/components/ui/accent/accent'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee } from '@/store/employee-slice/employees-selector'
import defaultAvatar from '@/assets/static/default-avatar.png'
import { fetchEmployeeAction } from '@/store/employee-slice/employees-api-actions'
import { useParams } from 'react-router-dom'
import { DropdownIcon } from '@/components/layouts/page-header/employee-menu/styled'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import Title from '@/components/ui/title/title'
import BoxInner from '@/components/ui/box-inner/box-inner'
import DescriptionList from '@/components/ui/description-list/description-list'
import dayjs from 'dayjs'
import Education from './education/education'
import Activity from './activity/activity'
import Tools from './tools/tools'

function EmployeesCVPage() {
  const ref = useRef<HTMLDivElement | null>(null)
  const employee = useAppSelector(getEmployee)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    !employee && params.id && dispatch(fetchEmployeeAction({
      id: params.id
    }))
  }, [dispatch, employee, params.id])

  if (!employee) {
    return <></>
  }

  return (
    <PrivateRoute>
      <ReactToPrint
        trigger={() =>
          <ExportButton type="button">
            Печатать <DropdownIcon />
          </ExportButton>}
        content={() => ref.current} />
      <br />
      <CV ref={ref}>
        <Header>
          <Avatar
            src={employee.avatar}
            width={144}
            height={144}
            alt={employee.name}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null
              currentTarget.src = defaultAvatar
            }} />

          <HeaderInner>
            <div>
              <EmployeeName>
                {`${employee.surname} ${employee.name} ${employee.patronymic || ''}`}
              </EmployeeName>
              <EmployeeDetail>
                {employee.details?.address && <>
                  <MapPin /> <div>{employee.details.address}</div>
                </>}
              </EmployeeDetail>
              <EmployeeDetail>
                {employee.jobs.length > 0 && <>
                  <BriefcaseIcon /> <div>{employee.jobs?.map(({ title }) => title).join(', ')}</div>
                </>}
              </EmployeeDetail>
              <EmployeePositions>
                {employee.positions?.map(({ title }) => (
                  <Accent tagName="li" key={title}>{title}</Accent>
                ))}
              </EmployeePositions>
            </div>
          </HeaderInner>
        </Header>
        <Box>
          <BoxToolbar>
            <Title small>Профиль</Title>
          </BoxToolbar>
          <BoxInner>
            <DescriptionList
              list={{
                'Фамилия': employee.surname,
                'Имя': employee.name,
                'Отчество': employee.patronymic,
                'Логин': employee.login,
                'Начало работы': dayjs(employee.startedWorkAt).format('D MMM YYYY').toString(),
                'Отдел': employee.departments.map(({ title }) => title).join(', '),
                'Должность': employee.jobs.map(({ title }) => title).join(', '),
                'Позиция': employee.positions.map(({ title }) => title).join(', '),
              }} />
          </BoxInner>
        </Box>
        <Box>
          <BoxToolbar>
            <Title small>Персональные данные</Title>
          </BoxToolbar>
          <BoxInner>
            <DescriptionList
              list={{
                'Национальность': employee.details?.nationality,
                'Дата рождения': employee.details?.birthDate && dayjs(employee.details.birthDate).format('D MMM YYYY'),
                'Пол': employee.details?.gender,
                'Гражданство': employee.details?.citizenship,
                'Адрес': employee.details?.address,
                'Эл. почта': employee.details?.email,
                'Телефон-1': employee.details?.tel1,
                'Телефон-2': employee.details?.tel2,
                'Семейное положение': employee.details?.familyStatus,
                'Дети': employee.details?.children?.map((child) => child).reverse().join(', '),
              }}
            />
          </BoxInner>
        </Box>
        <Education />
        <Activity />
        <Tools />
      </CV>
    </PrivateRoute>
  )
}

export default EmployeesCVPage
