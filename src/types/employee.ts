import { Jobs } from './job';
import { Language } from './language';
import { Positions } from './position';

export type LoginData = {
  login: string;
  password: string;
};

export type AuthorizedEmployee = {
  id: string;
  name: string;
  surname: string;
  avatar: string;
};

export type Employee = {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  login: string;
  avatar: string;
  previousEmployeeId: string;
  nextEmployeeId: string;
  startedWorkAt: Date;
  jobs: Jobs | null;
  positions: Positions | null;
  languages: EmployeeLanguages | null;
};

export type Employees = Employee[];

export type AvatarPath = string;

export type PersonalData = {
  id: string;
  userId: string;
  birthDate: Date;
  gender: string;
  nationality: string;
  citizenship: string;
  address: string;
  email: string;
  tel1: string;
  tel2: string;
  familyStatus: string;
  children: string;
};

export type EducationId = string;

export type Education = {
  id: EducationId;
  userId: string;
  startedAt: Date;
  graduatedAt: Date;
  institution: string;
  faculty: string;
  form: string;
  speciality: string;
};

export type Educations = Education[];

export type ActivityId = string;

export type Activity = {
  id: ActivityId;
  userId: string;
  hiredAt: Date;
  dismissedAt: Date;
  organization: string;
  job: string;
};

export type Activities = Activity[];

export type EmployeeLanguage = Language & {
  level: string;
};

export type EmployeeLanguages = EmployeeLanguage[];
