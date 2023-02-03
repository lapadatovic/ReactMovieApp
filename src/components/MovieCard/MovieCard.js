import React from 'react'
import './movieCard.css'
export default function MovieCard( {movie} ) {

  const getPosterURL = (posterPath) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`
  }

  return (
    <div class="movie-box">
    <img src={getPosterURL(movie.backdrop_path)} alt="" class="movie-box-img"/>
      <div class="box-text">
          <h2 class="movie-tittle">{movie.title ? movie.title : movie.name}</h2>
          <a href="play-page.html" class="watch-btn play-btn">
              <i class="fa fa-solid fa-play"></i>
          </a>
      </div>
  </div>
  )
}
