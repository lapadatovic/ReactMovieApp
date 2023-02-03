import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'c50c5516a3be6c606811e8b1a753f3f2';
const TRENDING_MOVIES_URL = `${BASE_URL}/trending/all/day?api_key=${KEY}`

const initialState = {
    movies:{}
}

  //   fetch('https://api.themoviedb.org/3/trending/all/day?api_key=c50c5516a3be6c606811e8b1a753f3f2')

export const fetchTrendingMovies = createAsyncThunk('movies/fetchTrendingMovies', async () => {
    try {
        const response = await axios.get(TRENDING_MOVIES_URL)
        return response.data.results;
    }catch(err){
        console.log(err.message)
    }
})

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
                state.movies = action.payload;   
            })
    }
});

export const selectTrendingMovies = (state) => state.movies.movies;

export default movieSlice.reducer;