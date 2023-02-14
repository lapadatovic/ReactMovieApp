import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
import './movieListing.css'
import { fetchTrendingMovies,selectTrendingMovies } from '../../features/movies/movieSlice'
import { useDispatch, useSelector} from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";


export default function MovieListing() {

  const dispatch = useDispatch();
  const trendingMovies = useSelector((state) => selectTrendingMovies(state));
  let [trendingMoviesList, setTrendingMoviesList] = useState([])
  
  useEffect(()=>{
    dispatch(fetchTrendingMovies())
  },[dispatch])

  useEffect(()=>{
    setTrendingMoviesList(
      trendingMoviesList = Array.from(trendingMovies).filter(rate => rate.popularity > 1000.000).map((movie)=> {
        return(
        <SwiperSlide> 
          <Link style={{textDecoration:'none', color:'white'}} to='movies/:movieId'>
            <MovieCard key={movie.id} movie={movie}/> 
          </Link>
        </SwiperSlide>)
      })
    )
  },[trendingMovies])
  
  return (
    <section class="movies container" id="movies">
        <div class="heading">
            <h2 class="heading-tittle">Trending Movies</h2>
        </div>
        <div class="movies-content">
            {/*movies cards*/}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              // navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              >
              {trendingMoviesList}
            </Swiper>
        </div>
    </section>
  )
}
