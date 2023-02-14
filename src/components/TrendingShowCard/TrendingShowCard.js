import React from 'react'
import './trendingShowCard.css'
export default function TrendingShowCard({show}) {

  const getShowPoster = (url) => {
      return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${url}`
  }
  return (
    <div class="show-box">
    <img src={getShowPoster(show.poster_path)} alt="" class="show-box-img"/>
      <div class="box-text">
        <h2 class="show-tittle">{show.title ? show.title : show.name}</h2>
        <a href="#" class="watch-btn play-btn">
        <i class="fa fa-solid fa-play"></i>
        </a>
      </div>
  </div>
  )
}
