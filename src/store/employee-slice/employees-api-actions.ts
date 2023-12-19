/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { APIRoute } from '../../const'
import { generatePath } from 'react-router-dom'
import { Employee } from '@/types/employees'
import { ID } from '@/types'

// export const fetchEmployeePersonalDataAction = createAsyncThunk<PersonalData, {
//   employeeId: string
// }, {
//   extra: AxiosInstance
// }>(
//   'employees/fetchEmployeePersonalData',
//   async ({ employeeId }, { extra: api }) => {
//     const { data } = await api.get(generatePath(APIRoute.EmployeePersonalData, { employeeId }))
//     return adaptPersonalDataToClient(data)
//   },
// )

export const updateEmployeesAvatarAction = createAsyncThunk<void, {
  formData: FormData
  id: ID
  successHandler: (avatar: string) => void
 }, {
  extra: AxiosInstance
}>(
  'employees/updateAvatar',
  async ({ formData, id, successHandler }, { extra: api }) => {
    formData.append('_method', 'put')
    const { data } = await api.post(
      generatePath(APIRoute.Employees.Avatar, { id }), formData
    )
    successHandler(data)
  },
)

export const deleteEmployeesAvatarAction = createAsyncThunk<void, {
  id: ID
  successHandler: () => void
 }, {
  extra: AxiosInstance
}>(
  'employees/deleteAvatar',
  async ({ id, successHandler }, { extra: api }) => {
    await api.delete(generatePath(APIRoute.Employees.Avatar, { id }))
    successHandler()
  },
)

export const fetchEmployeeAction = createAsyncThunk<Employee, {
  id: string
}, {
  extra: AxiosInstance
}>(
  'employees/fetchEmployee',
  async ({ id }, { extra: api }) => {
    const { data } = await api.get(generatePath(APIRoute.Employees.Show, { id }))
    return data
  },
)

// export const updateEmployeeAction = createAsyncThunk<Employee, {
//   dto: EmployeeUpdateDTO
//   employeeId: string
//   errorHandler: (error: ValidationError) => void
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
//   rejectValue: ValidationError
// }>(
//   'employees/updateEmployee',
//   async (arg, { extra: api, rejectWithValue }) => {
//     const { dto, employeeId, errorHandler, successHandler } = arg
//     try {
//       const { data } = await api.put(generatePath(APIRoute.Employee, { employeeId }), dto)
//       successHandler()
//       return adaptEmployeeToClient(data)
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err
//       if (!error.response) {
//         throw err
//       }
//       errorHandler(error.response.data)
//       return rejectWithValue(error.response.data)
//     }
//   },
// )

// export const updateEmployeePersonalDataAction = createAsyncThunk<PersonalData, {
//   formData: FormData
//   employeeId: string
//   errorHandler: (error: ValidationError) => void
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
//   rejectValue: ValidationError
// }>(
//   'employees/updateEmployeePersonalData',
//   async (arg, { extra: api, rejectWithValue }) => {
//     const { formData, employeeId, errorHandler, successHandler } = arg
//     try {
//       formData.append('_method', 'put')
//       const { data } = await api.post(
//         generatePath(APIRoute.EmployeePersonalData, { employeeId }), formData
//       )
//       successHandler()
//       return adaptPersonalDataToClient(data)
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err
//       if (!error.response) {
//         throw err
//       }
//       errorHandler(error.response.data)
//       return rejectWithValue(error.response.data)
//     }
//   },
// )

// export const fetchEmployeeEducationsAction = createAsyncThunk<Educations, {
//   employeeId: string
// }, {
//   extra: AxiosInstance
// }>(
//   'employees/fetchEmployeeEducations',
//   async ({ employeeId }, { extra: api }) => {
//     const { data } = await api.get(generatePath(APIRoute.EmployeeEducations, { employeeId }))
//     return adaptEmployeeEducationsToClient(data)
//   },
// )

// export const updateEmployeeEducationAction = createAsyncThunk<Education, {
//   formData: FormData
//   educationId: string
//   errorHandler: (error: ValidationError) => void
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
//   rejectValue: ValidationError
// }>(
//   'employees/updateEducation',
//   async (arg, { extra: api, rejectWithValue }) => {
//     const { formData, educationId, errorHandler, successHandler } = arg
//     try {
//       formData.append('_method', 'put')
//       const { data } = await api.post(
//         generatePath(APIRoute.Education, { educationId }), formData
//       )
//       successHandler()
//       return adaptEmployeeEducationToClient(data)
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err
//       if (!error.response) {
//         throw err
//       }
//       errorHandler(error.response.data)
//       return rejectWithValue(error.response.data)
//     }
//   },
// )

// export const storeEmployeeEducationAction = createAsyncThunk<Education, {
//   formData: FormData
//   employeeId: string
//   errorHandler: (error: ValidationError) => void
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
//   rejectValue: ValidationError
// }>(
//   'employees/storeEmployeeEducation',
//   async (arg, { extra: api, rejectWithValue }) => {
//     const { formData, employeeId, errorHandler, successHandler } = arg
//     try {
//       const { data } = await api.post(
//         generatePath(APIRoute.EmployeeEducations, { employeeId }), formData
//       )
//       successHandler()
//       return adaptEmployeeEducationToClient(data)
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err
//       if (!error.response) {
//         throw err
//       }
//       errorHandler(error.response.data)
//       return rejectWithValue(error.response.data)
//     }
//   },
// )

// export const deleteEmployeeEducationAction = createAsyncThunk<EducationId, {
//   educationId: string
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
// }>(
//   'employees/deleteEmployeeEducation',
//   async ({ educationId, successHandler }, { extra: api }) => {
//     await api.delete(generatePath(APIRoute.Education, { educationId }))
//     successHandler()
//     return educationId
//   },
// )

// export const crudEmployeeLanguagesAction = createAsyncThunk<EmployeeLanguages | null, {
//   employeeId: string
//   employeeLanguages: EmployeeLanguages | null
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
// }>(
//   'employees/crudEmployeeLanguages',
//   async ({ employeeId, employeeLanguages, successHandler }, { extra: api }) => {
//     const { data } = await api.post(
//       generatePath(APIRoute.EmployeeLanguages, { employeeId }), { languages: employeeLanguages }
//     )
//     successHandler()
//     if (!data) {
//       return null
//     }
//     return adaptEmployeeLanguages(data)
//   },
// )

// export const fetchEmployeeActivitiesAction = createAsyncThunk<Activities, {
//   employeeId: string
// }, {
//   extra: AxiosInstance
// }>(
//   'employees/fetchEmployeeActivities',
//   async ({ employeeId }, { extra: api }) => {
//     const { data } = await api.get(generatePath(APIRoute.EmployeeActivities, { employeeId }))
//     return adaptEmployeeActivitiesToClient(data)
//   },
// )

// export const updateEmployeeActivityAction = createAsyncThunk<Activity, {
//   formData: FormData
//   activityId: string
//   errorHandler: (error: ValidationError) => void
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
//   rejectValue: ValidationError
// }>(
//   'employees/updateActivity',
//   async (arg, { extra: api, rejectWithValue }) => {
//     const { formData, activityId, errorHandler, successHandler } = arg
//     try {
//       formData.append('_method', 'put')
//       const { data } = await api.post(
//         generatePath(APIRoute.Activity, { activityId }), formData
//       )
//       successHandler()
//       return adaptEmployeeActivityToClient(data)
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err
//       if (!error.response) {
//         throw err
//       }
//       errorHandler(error.response.data)
//       return rejectWithValue(error.response.data)
//     }
//   },
// )

// export const storeEmployeeActivityAction = createAsyncThunk<Activity, {
//   formData: FormData
//   employeeId: string
//   errorHandler: (error: ValidationError) => void
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
//   rejectValue: ValidationError
// }>(
//   'employees/storeEmployeeActivity',
//   async (arg, { extra: api, rejectWithValue }) => {
//     const { formData, employeeId, errorHandler, successHandler } = arg
//     try {
//       const { data } = await api.post(
//         generatePath(APIRoute.EmployeeActivities, { employeeId }), formData
//       )
//       successHandler()
//       return adaptEmployeeActivityToClient(data)
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err
//       if (!error.response) {
//         throw err
//       }
//       errorHandler(error.response.data)
//       return rejectWithValue(error.response.data)
//     }
//   },
// )

// export const deleteEmployeeActivityAction = createAsyncThunk<ActivityId, {
//   activityId: string
//   successHandler: () => void
// }, {
//   extra: AxiosInstance
// }>(
//   'employees/deleteEmployeeActivity',
//   async ({ activityId, successHandler }, { extra: api }) => {
//     await api.delete(generatePath(APIRoute.Activity, { activityId }))
//     successHandler()
//     return activityId
//   },
// )

// export const fetchEmployeesAction = createAsyncThunk<Employees, {
//   successHandler: (employees: Employees) => void
// }, {
//   extra: AxiosInstance
// }>(
//   'employees/fetchEmployees',
//   async ({ successHandler }, { extra: api }) => {
//     const { data } = await api.get(APIRoute.Employees)
//     const employees = adaptEmployeesToClient(data)
//     successHandler(employees)
//     return employees
//   },
// )

// export const addEmployeeQuickAction = createAsyncThunk<void, {
//   dto: EmployeeQuickAddDTO
//   errorHandler: (error: ValidationError) => void
//   successHandler: (responseObject: EmployeeQuickAddResponse) => void
// }, {
//   extra: AxiosInstance
//   rejectValue: ValidationError
// }>(
//   'employees/addEmployeeQuickAction',
//   async (arg, { extra: api, rejectWithValue }) => {
//     const { dto, errorHandler, successHandler } = arg
//     try {
//       const { data } = await api.post<EmployeeQuickAddResponse>(APIRoute.EmployeesQuickAdd, dto)
//       successHandler(data)
//     } catch (err: any) {
//       const error: AxiosError<ValidationError> = err
//       if (!error.response) {
//         throw err
//       }
//       errorHandler(error.response.data)
//       return rejectWithValue(error.response.data)
//     }
//   },
// )
