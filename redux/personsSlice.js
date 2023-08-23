import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  rooms: 1,
  adults: 2,
  children: 0
}

export const personSlice = createSlice({
  name: 'person', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    addRooms: (state, action) => {
      // This is the reducer function for the deposit action
      state.rooms = action.payload
    },
    addAdults: (state, action) => {
      // This is the reducer function for the deposit action
      state.adults = action.payload
    },
    addChildren: (state, action) => {
      // This is the reducer function for the deposit action
      state.children = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {
  addRooms,
  addAdults,
  addChildren,
} = personSlice.actions

// We export the reducer function so that it can be added to the store
export default personSlice.reducer
