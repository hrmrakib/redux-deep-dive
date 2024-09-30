import { createSlice } from "@reduxjs/toolkit";

const initialProduct = {
    products: [],
    status: "idle",
    error: null
}

const productSlice = createSlice( {
    name: "products",
    initialState:initialProduct,
    reducers: {
        fetchProductSuccess: (state, action)=> {
            state.products = action.payload;
            state.status = "success"
        },
        fetchProductFailed: (state, action)=> {
            state.status = "failed"
            state.error = action.payload;
        },
        fetchProductLoading: (state) => {
            state.status = "loading"
        }
    }
})

export const {fetchProductSuccess,fetchProductFailed,fetchProductLoading} = productSlice.actions;

export default productSlice.reducer