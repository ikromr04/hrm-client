import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, SliceName } from '../../const';
import { Activities, AuthorizedEmployee, AvatarPath, Educations, Employee, Employees, PersonalData } from '../../types/employee';
import {
  checkAuthorizationAction,
  crudEmployeeLanguagesAction,
  deleteEmployeeActivityAction,
  deleteEmployeeEducationAction,
  fetchEmployeeActivitiesAction,
  fetchEmployeeByIdAction,
  fetchEmployeeEducationsAction,
  fetchEmployeePersonalDataAction,
  fetchEmployeesAction,
  loginAction,
  logoutAction,
  storeEmployeeActivityAction,
  storeEmployeeEducationAction,
  updateEmployeeAction,
  updateEmployeeActivityAction,
  updateEmployeeEducationAction,
  updateEmployeePersonalDataAction
} from './employees-api-actions';

export type EmployeesSlice = {
  authorizationStatus: AuthorizationStatus;
  authorizedEmployee: AuthorizedEmployee | null;
  authorizedEmployeeAvatar: AvatarPath | null;
  employee: Employee | null;
  employees: Employees | null;
  employeeAvatar: AvatarPath | null;
  employeePersonalData: PersonalData | null;
  employeeEducations: Educations | null;
  employeeActivities: Activities | null;
};

const initialState: EmployeesSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizedEmployee: null,
  employee: null,
  employees: null,
  employeeAvatar: null,
  authorizedEmployeeAvatar: null,
  employeePersonalData: null,
  employeeEducations: null,
  employeeActivities: null,
};

export const employeeSlice = createSlice({
  name: SliceName.Employee,
  initialState,
  reducers: {
    setEmployeeAvatarAction: (state, action) => {
      state.employeeAvatar = action.payload;
      if (state.authorizedEmployee?.id === state.employee?.id ) {
        state.authorizedEmployeeAvatar = action.payload;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthorizationAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authorizedEmployee = action.payload;
        state.authorizedEmployeeAvatar = action.payload.avatar;
      })
      .addCase(checkAuthorizationAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authorizedEmployee = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(fetchEmployeeByIdAction.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.employeeAvatar = action.payload.avatar;
      })
      .addCase(fetchEmployeePersonalDataAction.fulfilled, (state, action) => {
        state.employeePersonalData = action.payload;
      })
      .addCase(updateEmployeeAction.fulfilled, (state, action) => {
        state.employee = action.payload;
        if (action.payload.id === state.authorizedEmployee?.id) {
          state.authorizedEmployee = action.payload;
        }
      })
      .addCase(updateEmployeePersonalDataAction.fulfilled, (state, action) => {
        state.employeePersonalData = action.payload;
      })
      .addCase(fetchEmployeeEducationsAction.fulfilled, (state, action) => {
        state.employeeEducations = action.payload;
      })
      .addCase(updateEmployeeEducationAction.fulfilled, (state, action) => {
        const updatedEducation = action.payload;
        if (state.employeeEducations) {
          state.employeeEducations = state.employeeEducations.map((education) =>
            (education.id === updatedEducation.id) ? updatedEducation : education
          );
        } else {
          state.employeeEducations = [updatedEducation];
        }
      })
      .addCase(storeEmployeeEducationAction.fulfilled, (state, action) => {
        const educations = state.employeeEducations || [];
        state.employeeEducations = [...educations, action.payload];
      })
      .addCase(deleteEmployeeEducationAction.fulfilled, (state, action) => {
        const educations = state.employeeEducations || [];
        state.employeeEducations = educations.filter(({ id }) => id !== action.payload);
      })
      .addCase(fetchEmployeeActivitiesAction.fulfilled, (state, action) => {
        state.employeeActivities = action.payload;
      })
      .addCase(updateEmployeeActivityAction.fulfilled, (state, action) => {
        const updatedActivity = action.payload;
        if (state.employeeActivities) {
          state.employeeActivities = state.employeeActivities.map((activity) =>
            (activity.id === updatedActivity.id) ? updatedActivity : activity
          );
        } else {
          state.employeeActivities = [updatedActivity];
        }
      })
      .addCase(storeEmployeeActivityAction.fulfilled, (state, action) => {
        const activities = state.employeeActivities || [];
        state.employeeActivities = [...activities, action.payload];
      })
      .addCase(deleteEmployeeActivityAction.fulfilled, (state, action) => {
        const activities = state.employeeActivities || [];
        state.employeeActivities = activities.filter(({ id }) => id !== action.payload);
      })
      .addCase(crudEmployeeLanguagesAction.fulfilled, (state, action) => {
        const employee = state.employee && {
          ...state.employee,
          languages: action.payload,
        };
        state.employee = employee;
      })
      .addCase(fetchEmployeesAction.fulfilled, (state, action) => {
        state.employees = action.payload;
      });
  },
});

export const { setEmployeeAvatarAction } = employeeSlice.actions;
