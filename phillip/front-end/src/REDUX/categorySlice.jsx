import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getCategories = createAsyncThunk("categorySlice", async () => {
    const response = await fetch("http://localhost:3000/phillip/panel/kategori", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error("Fetching Error")
    }

    const data = await response.json()
    return data 
})


const initialState = {
    categories : [],
    selectedCategory: "0",
    loading: true
}

export const categorySlice = createSlice({
    name: "categorySlice",
    initialState,
    reducers:{
        selectedCategoryHandler : (state, action) => {
            state.selectedCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = true
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.loading = false
        })
        .addCase(getCategories.rejected, (state) => {
            state.loading = false
        })
    }
})


export const { selectedCategoryHandler } = categorySlice.actions

export default categorySlice.reducer