export const EMPTY_OPTION_LABEL = '--Выберите--'

export const AppRoute = {
  Main: '/',
  Auth: {
    Login: '/auth/login',
    Logout: '/auth/logout'
  },
  Employees: {
    Index: '/employees',
    Structure: '/employees/structure',
    Show: '/employees/:employeeId',
    Work: '/employees/:employeeId/work',
    Equipment: '/employees/:employeeId/equipment',
    Vacation: '/employees/:employeeId/vacation',
    PIR: '/employees/:employeeId/pir',
    KPI: '/employees/:employeeId/kpi',
    Attendance: '/employees/:employeeId/attendance',
  },
  NotFound: '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const APIRoute = {
  Auth: {
    Login: '/auth/login',
    Logout: '/auth/logout'
  },
  Employees: '/employees',
  EmployeesAvatar: '/employees/:employeeId/avatar',

  EmployeesQuickAdd: '/employees/quick-add',
  Employee: '/employees/:employeeId',
  EmployeeJob: '/employees/:employeeId/job',
  EmployeePersonalData: '/employees/:employeeId/personal',
  EmployeeEducations: '/employees/:employeeId/educations',
  EmployeeActivities: '/employees/:employeeId/activities',
  EmployeeLanguages: '/employees/:employeeId/languages',
  Education: '/educations/:educationId',
  Activity: '/labor-activities/:activityId',
  Jobs: '/jobs',
  Positions: '/positions',
  Languages: '/languages',
}

export enum SliceName {
  Auth = 'Auth',
  App = 'App',
  Employee = 'Employee',
  Job = 'Job',
  Position = 'Position',
  Language = 'Language',
}

export const languageLevelOptions = [
  { value: '(А1) – начальный', label: '(А1) – начальный' },
  { value: '(А2) – ниже среднего', label: '(А2) – ниже среднего' },
  { value: '(В1) – средний', label: '(В1) – средний' },
  { value: '(В2) – выше среднего', label: '(В2) – выше среднего' },
  { value: '(C1) – продвинутый', label: '(C1) – продвинутый' },
  { value: '(C2) – профессиональный', label: '(C2) – профессиональный' },
]

export const educationFormOptions = [
  { value: 'Очно', label: 'Очно' },
  { value: 'Заочно', label: 'Заочно' },
]
