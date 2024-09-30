import { createSlice } from "@reduxjs/toolkit";

const initialProduct = {products: []}

const productSlice = createSlice( {
    name: "products",
    initialState:initialProduct,
    reducers:()=> {
        addProduct: (state, action)=> {

        }
    }
})