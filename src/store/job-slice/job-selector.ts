import { SliceName } from '../../const';
import { Jobs } from '../../types/job';
import { State } from '../../types/state';

export const getJobs = (state: State): Jobs | null => state[SliceName.Job].jobs;
