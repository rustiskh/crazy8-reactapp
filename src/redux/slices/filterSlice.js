import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sortFilter: {
        name: 'Price: High to low',
        sortProperty: 'price&order=desc'
    }
}

export const filterSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSort(state, action) {
            state.sortFilter = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSort } = filterSlice.actions

export default filterSlice.reducer