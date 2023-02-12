import React from 'react'
import './moviesPage.css'
import MovieCard from '../MovieCard/MovieCard'
import {fetchTrendingMovies, selectTrendingMovies} from '../../features/movies/movieSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'

export default function MoviesPage() {
  const dispatch = useDispatch();

  const fetchedMovies = useSelector((state) => selectTrendingMovies(state));
  const [movies, setMovies] = useState([]);
  const [noOfDisplayedMovies, setNoOfDisplayedMovies] = useState(4)

  const slice = fetchedMovies.slice(0,noOfDisplayedMovies)

  const loadMore = () => {
    setNoOfDisplayedMovies(noOfDisplayedMovies + 4)
  }
 
  useEffect(()=>{
    dispatch(fetchTrendingMovies())
  },[dispatch])

  useEffect(()=>{
    setMovies(slice.map((movie) => <MovieCard key={movie.id} movie={movie}/>))
  },[fetchedMovies, noOfDisplayedMovies])

  console.log(movies.length)
  console.log(noOfDisplayedMovies)

  return (
    <section class="trending-movies container" id="movies">
        <div class="trending-heading">
            <h2 class="heading-tittle">Trending Movies</h2>
        </div>
        <div class="movies-content">
            {/*movies cards*/}
            {movies} 
        </div>
        {movies.length >= noOfDisplayedMovies ? <LoadMoreButton handleClick={() => loadMore()}/> : ''}
    </section>
  )
}
