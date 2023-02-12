import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movies/movieSlice'
import TVShowsReducer from './tvShows/TVShowSlice'

export const store = configureStore({
    reducer: {
        movies: movieReducer,
        tvShows: TVShowsReducer
    }
})