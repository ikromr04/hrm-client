import { SliceName } from '../../const'
import { Languages } from '../../types/languages'
import { State } from '../../types/state'

export const getLanguages = (state: State): Languages | null =>
  state[SliceName.Language].languages
