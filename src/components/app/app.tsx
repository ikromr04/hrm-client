import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppRoute, AuthorizationStatus } from '@/const'
import { useAppSelector } from '@/hooks'
import LoginPage from '../pages/login-page/login-page'
import NotFoundPage from '../pages/not-found-page/not-found-page'
import HomePage from '../pages/home-page/home-page'
import EmployeesPage from '../pages/employees/index-page/employees-page'
import EmployeesStructurePage 
  from '../pages/employees/structure-page/employees-structure-page'
import EmployeesShowPage from '../pages/employees/show-page/employees-show-page'
import EmployeesWorkPage from '../pages/employees/work-page/employees-work-page'
import EmployeesEquipmentPage 
  from '../pages/employees/equipment-page/employees-equipment-page'
import EmployeesVacationPage from '../pages/employees/vacation-page/employees-vacation-page'
import EmployeesPIRPage from '../pages/employees/pir-page/employees-pir-page'
import EmployeesKPIPage from '../pages/employees/kpi-page/employees-kpi-page'
import EmployeesAttendancePage 
  from '../pages/employees/attendance-page/employees-attendance-page'
import { getAuthStatus } from '@/store/auth-slice/auth-selector'
import AppLoading from '../ui/app-loading/app-loading'
import EmployeesEducationPage 
  from '../pages/employees/education-page/employees-education-page'

function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus)

  if (authStatus === AuthorizationStatus.Unknown) {
    return <AppLoading />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<HomePage />} />

        <Route path={AppRoute.Employees.Index} element={<EmployeesPage />} />
        <Route path={AppRoute.Employees.Structure} element={<EmployeesStructurePage />} />
        <Route path={AppRoute.Employees.Show} element={<EmployeesShowPage />} />
        <Route path={AppRoute.Employees.Education} element={<EmployeesEducationPage />} />
        <Route path={AppRoute.Employees.Work} element={<EmployeesWorkPage />} />
        <Route path={AppRoute.Employees.Equipment} element={<EmployeesEquipmentPage />} />
        <Route path={AppRoute.Employees.Vacation} element={<EmployeesVacationPage />} />
        <Route path={AppRoute.Employees.PIR} element={<EmployeesPIRPage />} />
        <Route path={AppRoute.Employees.KPI} element={<EmployeesKPIPage />} />
        <Route path={AppRoute.Employees.Attendance} element={<EmployeesAttendancePage />} />

        <Route path={AppRoute.Dashboard.Jobs} element={<LoginPage />} />

        <Route path={AppRoute.Auth.Login} element={<LoginPage />} />

        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
