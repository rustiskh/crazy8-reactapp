import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchValue: '',
    sortFilter: {
        name: 'Price: High to low',
        sortProperty: 'price&_order=desc'
    }
}

export const filterSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        setSort(state, action) {
            state.sortFilter = action.payload;
        },
        setParseSort(state, action) {
            state.sortFilter = action.payload.sort;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const selectorSort = (state) => state.sortFilter;
export const selectorSortSearch = (state) => state.sortFilter.searchValue;

export const { setSort, setParseSort, setSearchValue } = filterSlice.actions

export default filterSlice.reducer