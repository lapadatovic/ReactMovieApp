import React from 'react'
import './movieCard.css'
export default function MovieCard() {
  return (
    <div class="movie-box">
    <img src="/assets/moviesImg/movie-1.jpg" alt="" class="movie-box-img"/>
      <div class="box-text">
          <h2 class="movie-tittle">Jumanji:Welcom To The Joungle</h2>
          <span class="movie-type">Action</span>
          <a href="play-page.html" class="watch-btn play-btn">
              <i class="fa fa-solid fa-play"></i>
          </a>
      </div>
  </div>
  )
}
