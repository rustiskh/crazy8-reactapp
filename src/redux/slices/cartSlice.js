import { createSelector, createSlice } from '@reduxjs/toolkit'


const initialState = {
    totalPrice: 0,
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const { SKU, sizes, colors, count } = action.payload;
            const findItem = state.items.find(obj =>
                obj.SKU === SKU &&
                obj.sizes === sizes &&
                obj.colors === colors
            );


            if (findItem) {
                findItem.count += count;
            } else {
                state.items.push({
                    ...action.payload,
                });
            }


            state.totalPrice = Math.ceil(state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0) * 100) / 100;
        },

        minusItem(state, action) {
            const { SKU, sizes, colors } = action.payload;
            const findItem = state.items.find(obj =>
                obj.SKU === SKU &&
                obj.sizes === sizes &&
                obj.colors === colors);
            if (!findItem) return;

            findItem.count--;

            if (findItem.count < 1) {
                state.items = state.items.filter(obj => obj !== findItem);
            }

            state.totalPrice = Math.ceil((state.totalPrice - findItem.price) * 100) / 100;

            if (state.items.length === initialState.items.length) {
                state.totalPrice = initialState.totalPrice;
            }
        },

        plusItem(state, action) {
            const { SKU, sizes, colors } = action.payload;
            const findItem = state.items.find(obj =>
                obj.SKU === SKU &&
                obj.sizes === sizes &&
                obj.colors === colors
            );


            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                });
            }


            state.totalPrice = Math.ceil(state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0) * 100) / 100;
        },

        removeItem(state, action) {
            const { SKU, sizes, colors } = action.payload;
            const findItem = state.items.find(obj =>
                obj.SKU === SKU &&
                obj.sizes === sizes &&
                obj.colors === colors);

            state.items = state.items.filter(obj => !(
                obj.SKU === SKU &&
                obj.sizes === sizes &&
                obj.colors === colors));

            state.totalPrice = Math.ceil((state.totalPrice - findItem.price * findItem.count) * 100) / 100;

            if (state.items.length === initialState.items.length) {
                state.totalPrice = initialState.totalPrice;
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const selectorCart = (state) => state.cart;
export const selectorCartItem = (state) => state.cart.items;
export const selectorCartItemBySKU = (SKU) => createSelector(
    selectorCartItem,
    (items) => items.find(obj => obj.SKU === SKU)
)


export const { addItem, minusItem, plusItem, removeItem } = cartSlice.actions

export default cartSlice.reducer