import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppRoute, AuthorizationStatus } from '@/const'
import { useAppSelector } from '@/hooks'
import { getAuthorizationStatus } from '@/store/employee-slice/employees-selector'
import { AppSpinner } from './styled'
import LoginPage from '../pages/login-page/login-page'
import NotFoundPage from '../pages/not-found-page/not-found-page'
import MainPage from '../pages/main-page/main-page'
import EmployeePage from '../pages/employee-page/employee-page'
import EmployeeWorkPage from '../pages/employee-work-page/employee-work-page'
import EmployeeEquipmentPage from '../pages/employee-equipment-page/employee-equipment-page'
import EmployeeVacationPage from '../pages/employee-vacation-page/employee-vacation-page'
import EmployeePIRPage from '../pages/employee-pir-page/employee-pir-page'
import EmployeeKPIPage from '../pages/employee-kpi-page/employee-kpi-page'
import EmployeeAttendancePage from '../pages/employee-attendance-page/employee-attendance-page'
import EmployeesStructurePage from '../pages/employees-structure-page/employees-structure-page'
import EmployeesPage from '../pages/employees-page/employees-page'

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus)

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (<AppSpinner />)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Auth.Login} element={<LoginPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />

        <Route path={AppRoute.Main} element={<MainPage />} />

        <Route path={AppRoute.Employees.Index} element={<EmployeesPage />} />
        <Route path={AppRoute.Employees.Structure} element={<EmployeesStructurePage />} />
        <Route path={AppRoute.Employees.Show} element={<EmployeePage />} />
        <Route path={AppRoute.Employees.Work} element={<EmployeeWorkPage />} />
        <Route path={AppRoute.Employees.Equipment} element={<EmployeeEquipmentPage />} />
        <Route path={AppRoute.Employees.Vacation} element={<EmployeeVacationPage />} />
        <Route path={AppRoute.Employees.PIR} element={<EmployeePIRPage />} />
        <Route path={AppRoute.Employees.KPI} element={<EmployeeKPIPage />} />
        <Route path={AppRoute.Employees.Attendance} element={<EmployeeAttendancePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
