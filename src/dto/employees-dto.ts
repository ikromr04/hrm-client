import { Employee } from '@/types/employees'

export type EmployeesUpdateDTO = Omit<Employee, 'id' | 'next' | 'previous'>
