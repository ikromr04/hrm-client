/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError, AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { dropToken, saveToken } from '../../services/token'
import { generatePath } from 'react-router-dom'
import { ValidationError } from '../../types/validation-error'
import {
  Activities,
  Activity,
  ActivityId,
  AuthorizedEmployee,
  AvatarPath,
  Education,
  EducationId,
  Educations,
  Employee,
  EmployeeLanguages,
  Employees,
  LoginData,
  PersonalData
} from '../../types/employee'
import {
  adaptEmployeeActivitiesToClient,
  adaptEmployeeActivityToClient,
  adaptEmployeeEducationToClient,
  adaptEmployeeEducationsToClient,
  adaptEmployeeLanguages,
  adaptEmployeeToClient,
  adaptEmployeesToClient,
  adaptPersonalDataToClient
} from '../../adapters/employees'
import { EmployeeQuickAddDTO, EmployeeUpdateDTO } from '../../dto/employees'
import { EmployeeQuickAddResponse } from '../../response/employees'

export const checkAuthorizationAction = createAsyncThunk<AuthorizedEmployee, undefined, {
  extra: AxiosInstance
}>(
  'employees/checkAuthorization',
  async (_arg, { extra: api }) => {
    const { data } = await api.get(APIRoute.Auth.Login)
    return adaptEmployeeToClient(data)
  },
)

export const loginAction = createAsyncThunk<AuthorizedEmployee, {
  loginData: LoginData,
  errorHandler: (error: ValidationError) => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/login',
  async ({ loginData, errorHandler }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post(APIRoute.Auth.Login, loginData)
      saveToken(data.token)
      return adaptEmployeeToClient(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const logoutAction = createAsyncThunk<void, undefined, {
  extra: AxiosInstance
}>(
  'employees/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Auth.Logout)
    dropToken()
  },
)

export const fetchEmployeePersonalDataAction = createAsyncThunk<PersonalData, {
  employeeId: string
}, {
  extra: AxiosInstance
}>(
  'employees/fetchEmployeePersonalData',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.EmployeePersonalData, { employeeId }))
    return adaptPersonalDataToClient(data)
  },
)

export const updateEmployeeAvatarAction = createAsyncThunk<void, {
  formData: FormData
  employeeId: string
  successHandler: (avatarPath: AvatarPath | null) => void
 }, {
  extra: AxiosInstance
}>(
  'employees/updateEmployeeAvatar',
  async ({ formData, employeeId, successHandler }, { extra: api }) => {
    formData.append('_method', 'put')
    const { data } = await api.post(
      generatePath(APIRoute.EmployeeAvatar, { employeeId }), formData
    )
    successHandler(data)
  },
)

export const deleteEmployeeAvatarAction = createAsyncThunk<void, {
  employeeId: string
  successHandler: () => void
 }, {
  extra: AxiosInstance
}>(
  'employees/deleteEmployeeAvatar',
  async ({ employeeId, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.EmployeeAvatar, { employeeId }))
    successHandler()
  },
)

export const fetchEmployeeByIdAction = createAsyncThunk<Employee, {
  employeeId: string
}, {
  extra: AxiosInstance
}>(
  'employees/fetchEmployeeById',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.Employee, { employeeId }))
    return adaptEmployeeToClient(data)
  },
)

export const updateEmployeeAction = createAsyncThunk<Employee, {
  dto: EmployeeUpdateDTO
  employeeId: string
  errorHandler: (error: ValidationError) => void
  successHandler: () => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/updateEmployee',
  async (arg, { extra: api, rejectWithValue }) => {
    const { dto, employeeId, errorHandler, successHandler } = arg
    try {
      const { data } = await api.put(generatePath(APIRoute.Employee, { employeeId }), dto)
      successHandler()
      return adaptEmployeeToClient(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const updateEmployeePersonalDataAction = createAsyncThunk<PersonalData, {
  formData: FormData
  employeeId: string
  errorHandler: (error: ValidationError) => void
  successHandler: () => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/updateEmployeePersonalData',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, employeeId, errorHandler, successHandler } = arg
    try {
      formData.append('_method', 'put')
      const { data } = await api.post(
        generatePath(APIRoute.EmployeePersonalData, { employeeId }), formData
      )
      successHandler()
      return adaptPersonalDataToClient(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const fetchEmployeeEducationsAction = createAsyncThunk<Educations, {
  employeeId: string
}, {
  extra: AxiosInstance
}>(
  'employees/fetchEmployeeEducations',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.EmployeeEducations, { employeeId }))
    return adaptEmployeeEducationsToClient(data)
  },
)

export const updateEmployeeEducationAction = createAsyncThunk<Education, {
  formData: FormData
  educationId: string
  errorHandler: (error: ValidationError) => void
  successHandler: () => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/updateEducation',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, educationId, errorHandler, successHandler } = arg
    try {
      formData.append('_method', 'put')
      const { data } = await api.post(
        generatePath(APIRoute.Education, { educationId }), formData
      )
      successHandler()
      return adaptEmployeeEducationToClient(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const storeEmployeeEducationAction = createAsyncThunk<Education, {
  formData: FormData
  employeeId: string
  errorHandler: (error: ValidationError) => void
  successHandler: () => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/storeEmployeeEducation',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, employeeId, errorHandler, successHandler } = arg
    try {
      const { data } = await api.post(
        generatePath(APIRoute.EmployeeEducations, { employeeId }), formData
      )
      successHandler()
      return adaptEmployeeEducationToClient(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const deleteEmployeeEducationAction = createAsyncThunk<EducationId, {
  educationId: string
  successHandler: () => void
}, {
  extra: AxiosInstance
}>(
  'employees/deleteEmployeeEducation',
  async ({ educationId, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Education, { educationId }))
    successHandler()
    return educationId
  },
)

export const crudEmployeeLanguagesAction = createAsyncThunk<EmployeeLanguages | null, {
  employeeId: string
  employeeLanguages: EmployeeLanguages | null
  successHandler: () => void
}, {
  extra: AxiosInstance
}>(
  'employees/crudEmployeeLanguages',
  async ({ employeeId, employeeLanguages, successHandler }, { extra: api }) => {
    const { data } = await api.post(
      generatePath(APIRoute.EmployeeLanguages, { employeeId }), { languages: employeeLanguages }
    )
    successHandler()
    if (!data) {
      return null
    }
    return adaptEmployeeLanguages(data)
  },
)

export const fetchEmployeeActivitiesAction = createAsyncThunk<Activities, {
  employeeId: string
}, {
  extra: AxiosInstance
}>(
  'employees/fetchEmployeeActivities',
  async ({ employeeId }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.EmployeeActivities, { employeeId }))
    return adaptEmployeeActivitiesToClient(data)
  },
)

export const updateEmployeeActivityAction = createAsyncThunk<Activity, {
  formData: FormData
  activityId: string
  errorHandler: (error: ValidationError) => void
  successHandler: () => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/updateActivity',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, activityId, errorHandler, successHandler } = arg
    try {
      formData.append('_method', 'put')
      const { data } = await api.post(
        generatePath(APIRoute.Activity, { activityId }), formData
      )
      successHandler()
      return adaptEmployeeActivityToClient(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const storeEmployeeActivityAction = createAsyncThunk<Activity, {
  formData: FormData
  employeeId: string
  errorHandler: (error: ValidationError) => void
  successHandler: () => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/storeEmployeeActivity',
  async (arg, { extra: api, rejectWithValue }) => {
    const { formData, employeeId, errorHandler, successHandler } = arg
    try {
      const { data } = await api.post(
        generatePath(APIRoute.EmployeeActivities, { employeeId }), formData
      )
      successHandler()
      return adaptEmployeeActivityToClient(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)

export const deleteEmployeeActivityAction = createAsyncThunk<ActivityId, {
  activityId: string
  successHandler: () => void
}, {
  extra: AxiosInstance
}>(
  'employees/deleteEmployeeActivity',
  async ({ activityId, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Activity, { activityId }))
    successHandler()
    return activityId
  },
)

export const fetchEmployeesAction = createAsyncThunk<Employees, {
  successHandler: (employees: Employees) => void
}, {
  extra: AxiosInstance
}>(
  'employees/fetchEmployees',
  async ({ successHandler }, { extra: api }) => {
    const { data } = await api.get(APIRoute.Employees)
    const employees = adaptEmployeesToClient(data)
    successHandler(employees)
    return employees
  },
)

export const addEmployeeQuickAction = createAsyncThunk<void, {
  dto: EmployeeQuickAddDTO
  errorHandler: (error: ValidationError) => void
  successHandler: (responseObject: EmployeeQuickAddResponse) => void
}, {
  extra: AxiosInstance
  rejectValue: ValidationError
}>(
  'employees/addEmployeeQuickAction',
  async (arg, { extra: api, rejectWithValue }) => {
    const { dto, errorHandler, successHandler } = arg
    try {
      const { data } = await api.post<EmployeeQuickAddResponse>(APIRoute.EmployeesQuickAdd, dto)
      successHandler(data)
    } catch (err: any) {
      const error: AxiosError<ValidationError> = err
      if (!error.response) {
        throw err
      }
      errorHandler(error.response.data)
      return rejectWithValue(error.response.data)
    }
  },
)
