import { configureStore } from '@reduxjs/toolkit'
import destinationReducer from './destinationSlice'
import personReducer from './personsSlice'

const store = configureStore({
  reducer: {
    destination: destinationReducer,
    person: personReducer,
  }
})

export default store;