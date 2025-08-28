import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getBanners = createAsyncThunk("bannerSlice", async () => {
    const response = await fetch("http://localhost:3000/phillip/panel/banner", {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        }
    })

    if (!response) {
        throw new Error("Fetching Error")
    }

    const data = await response.json()
    return data
})

const initialState = {
    banners: [],
    loading: false
}

export const bannerSlice = createSlice({
    name:"bannerSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBanners.pending, (state) => {
            state.loading = true
        })
        .addCase(getBanners.fulfilled, (state, action) => {
            state.banners = action.payload
            state.loading = false
        })
        .addCase(getBanners.rejected, (state) => {
            state.loading = false
        })

    }
})

export const {  } = bannerSlice.actions

export default bannerSlice.reducer