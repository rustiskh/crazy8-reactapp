import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentPage: 0
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setParsePage(state, action) {
            state.currentPage = Number(action.payload.currentPage);
        }
    },
})

// Action creators are generated for each case reducer function
export const selectorPaginationPage = (state) => state.paginationFilter.currentPage;

export const { setCurrentPage, setParsePage } = paginationSlice.actions

export default paginationSlice.reducer