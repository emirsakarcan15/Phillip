import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getProducts = createAsyncThunk("productSlice/getProducts", async () => {
    const response = await fetch("http://localhost:3000/phillip/panel/product", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Fetching error")
    }

    const data = await response.json();
    return data
})


const initialState = {
    products: [],
    selectedProducts: [],
    loading: true
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        filteredProductHandler : (state, action) => {
            state.selectedProducts = action.payload
        }
     },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.selectedProducts = action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false
        })
    }
})


export const { filteredProductHandler } = productSlice.actions

export default productSlice.reducer