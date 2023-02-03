import React, {useEffect, useState} from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './movieListing.css'
import { fetchTrendingMovies,selectTrendingMovies } from '../../features/movies/movieSlice'
import { useDispatch, useSelector} from 'react-redux'

export default function MovieListing() {

  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) =>selectTrendingMovies(state));

  let [trendingMoviesList, setTrendingMoviesList] = useState([])
  
  useEffect(()=>{
    dispatch(fetchTrendingMovies())
  },[dispatch])

  useEffect(()=>{
    setTrendingMoviesList(
      trendingMoviesList = Array.from(trendingMovies).map((movie, index)=> {
        return(<MovieCard key={index} movie={movie}/>)
      })
    )
  },[trendingMovies])

  // trendingMoviesList = Array.from(trendingMovies).map((movie, index)=> {
  //   return(<MovieCard key={index} movie={movie}/>)
  // })
  
  return (
    <section class="movies container" id="movies">
        <div class="heading">
            <h2 class="heading-tittle">Trending Movies</h2>
        </div>
        <div class="movies-content">
            {/*movies cards*/}
            {trendingMoviesList}
        </div>
    </section>
  )
}
