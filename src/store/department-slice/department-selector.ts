import { Departments } from '@/types/departments'
import { SliceName } from '../../const'
import { State } from '../../types/state'

export const getDepartments = (state: State): Departments | null => state[SliceName.Department].departments
