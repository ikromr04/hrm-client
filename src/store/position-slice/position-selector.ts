import { SliceName } from '../../const';
import { Positions } from '../../types/position';
import { State } from '../../types/state';

export const getPositions = (state: State): Positions | null =>
  state[SliceName.Position].positions;
