import { createSlice } from '@reduxjs/toolkit';

import cartItems from '../../cartItems';

const initialState = {
	cartItems,
	amount: 0,
	total: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, { payload }) => {
			const { id } = payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== id);
		},
		increase: (state, { payload }) => {
			const { id } = payload;
			const item = state.cartItems.find((i) => i.id === id);
			item.amount += 1;
		},
		decrease: (state, { payload }) => {
			const { id } = payload;
			const item = state.cartItems.find((i) => i.id === id);
			item.amount -= 1;
		},
		calculateTotals: (state) => {
			let amount = 0;
			let total = 0;
			state.cartItems.map((item) => {
				amount += item.amount;
				total += item.amount * item.price;
				return null;
			});
			state.amount = amount;
			state.total = total;
		},
	},
});

export const { reducer: cartReducer } = cartSlice;
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
	cartSlice.actions;
