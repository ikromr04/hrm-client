export const GENDERS = ['Мужской', 'Женский']
export const FAMILY_STATUSES = ['Не женат', 'Не замужем', 'Женат', 'Замужем']
export const NO_CHILDREN = 'Нет детей'

export const AppRoute = {
  Home: '/',
  Auth: {
    Login: '/auth/login',
  },
  Employees: {
    Index: '/employees',
    Structure: '/employees/structure',
    Show: '/employees/:id',
    Education: '/employees/:id/education',
    Work: '/employees/:id/work',
    Equipment: '/employees/:id/equipment',
    Vacation: '/employees/:id/vacation',
    PIR: '/employees/:id/pir',
    KPI: '/employees/:id/kpi',
    Attendance: '/employees/:id/attendance',
    CV: '/employees/:id/cv',
  },
  Equipments: {
    Index: '/equipments'
  },
  Dashboard: {
    Employees: '/dashboard/employees',
    Jobs: '/dashboard/jobs',
    Positions: '/dashboard/positions',
    Languages: '/dashboard/languages',
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
    Index: '/auth',
    Login: '/auth/login',
  },
  Employees: {
    Index: '/employees',
    Show: '/employees/:id',
    Avatar: '/employees/:id/avatar',
    Languages: '/employees/:id/languages',
    Educations: '/employees/:id/educations',
    Activities: '/employees/:id/activities',
    Equipments: '/employees/:id/equipments',
    Export: '/employees/export',
  },
  Jobs: {
    Index: '/jobs',
    Show: '/jobs/:id',
  },
  Positions: {
    Index: '/positions',
    Show: '/positions/:id',
  },
  Languages: {
    Index: '/languages',
    Show: '/languages/:id',
  },
  Departments: {
    Index: '/departments',
    Tree: '/departments/tree',
    Show: '/departments/:id',
  },
  Educations: {
    Index: '/educations',
    Show: '/educations/:id',
  },
  Activities: {
    Index: '/activities',
    Show: '/activities/:id',
  },
  Equipments: {
    Index: '/equipments',
    Show: '/equipments/:id',
  },
}

export enum SliceName {
  Auth = 'Auth',
  App = 'App',
  Employee = 'Employee',
  Job = 'Job',
  Position = 'Position',
  Language = 'Language',
  Department = 'Department',
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

export const defaultEmployeesFilter = {
  name: {
    isShown: true,
    query: '',
  },
  login: {
    isShown: false,
    query: '',
  },
  departments: {
    isShown: true,
    query: [],
  },
  jobs: {
    isShown: true,
    query: [],
  },
  positions: {
    isShown: false,
    query: [],
  },
  languages: {
    isShown: false,
    query: [],
    level: '',
  },
}
