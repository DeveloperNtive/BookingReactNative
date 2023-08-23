import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  destination: ''
}

export const destinatioSlice = createSlice({
  name: 'destination', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    destination: (state, action) => {
      // This is the reducer function for the deposit action
      state.destination = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { destination } = destinatioSlice.actions

// We export the reducer function so that it can be added to the store
export default destinatioSlice.reducer;