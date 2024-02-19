import { createSlice } from '@reduxjs/toolkit'
import { SliceName } from '../../const'
import { Positions } from '../../types/positions'
import { deletePositionAction, fetchPositionsAction, storePositionAction, updatePositionAction } from './position-api-actions'

export type PositionSlice = {
  positions: Positions | null
};

const initialState: PositionSlice = {
  positions: null
}

export const positionSlice = createSlice({
  name: SliceName.Job,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPositionsAction.fulfilled, (state, action) => {
        state.positions = action.payload
      })
      .addCase(storePositionAction.fulfilled, (state, action) => {
        state.positions = [action.payload, ...(state.positions || [])]
      })
      .addCase(updatePositionAction.fulfilled, (state, action) => {
        if (state.positions) {
          state.positions = state.positions.map((position) => {
            if (position.id === action.payload.id) {
              return action.payload
            }
            return position
          })
        }
      })
      .addCase(deletePositionAction.fulfilled, (state, action) => {
        if (state.positions) {
          state.positions = state.positions.filter(({ id }) => id !== action.payload)
        }
      })
  },
})
