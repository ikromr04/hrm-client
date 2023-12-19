import { SliceName } from '../../const';
import { Employee, Employees } from '../../types/employees';
import { State } from '../../types/state';

export const getEmployee = (state: State): Employee | null =>
  state[SliceName.Employee].employee;

export const getEmployees = (state: State): Employees | null =>
  state[SliceName.Employee].employees;
