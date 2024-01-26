import { EmployeesFilter } from '@/types/employees';
import { SliceName } from '../../const';
import { State } from '../../types/state';

export const getNavigationCollapsedState = (state: State): boolean =>
  state[SliceName.App].isNavigationCollapsed;

export const getEmployeesFilter = (state: State): EmployeesFilter =>
  state[SliceName.App].employeesFilter;
