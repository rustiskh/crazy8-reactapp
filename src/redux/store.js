import { configureStore } from '@reduxjs/toolkit'
import sortFilter from './slices/filterSlice';

export const store = configureStore({
    reducer: {
        sortFilter,
    },
})

export default store;