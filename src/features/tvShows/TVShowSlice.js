import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'c50c5516a3be6c606811e8b1a753f3f2';
const TRENDING_TVSHOWS_URL = `${BASE_URL}/tv/popular?api_key=${KEY}`

const initialState = {
    data: []
}

export const fetchTVShows = createAsyncThunk('tvShows/fetchTVShow', async () =>{
    try{
        const response = await axios.get(TRENDING_TVSHOWS_URL);
        return response.data.results;
    }catch(err){
        console.log("error",err.message)
    }
})

const TVShowsSlice = createSlice({
    name: 'tvShows',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchTVShows.fulfilled, (state, action) =>{
                state.data = action.payload;
            })
    }
})

export const selectAllTVShows = (state) => {
    return state.tvShows.data
}

export default TVShowsSlice.reducer;