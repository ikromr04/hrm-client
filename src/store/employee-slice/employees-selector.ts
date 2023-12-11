import { SliceName } from '../../const';
import {
  Activities,
  AvatarPath,
  Educations,
  Employee,
  Employees,
  PersonalData
} from '../../types/employee';
import { State } from '../../types/state';

export const getEmployee = (state: State): Employee | null =>
  state[SliceName.Employee].employee;

export const getEmployees = (state: State): Employees | null =>
  state[SliceName.Employee].employees;

export const getEmployeeAvatar = (state: State): AvatarPath | null =>
  state[SliceName.Employee].employeeAvatar;

export const getEmployeePersonalData = (state: State): PersonalData | null =>
  state[SliceName.Employee].employeePersonalData;

export const getEmployeeEducations = (state: State): Educations | null =>
  state[SliceName.Employee].employeeEducations;

export const getEmployeeActivities = (state: State): Activities | null =>
  state[SliceName.Employee].employeeActivities;
