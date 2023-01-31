import React from 'react'
import './banner.css'
export default function Banner() {
  return (
    <section class="home container" id="home">
        <img src="/assets/moviesImg/home-background.png"class="home-img" alt=""/>
        <div class="home-text">
            <h1 class="home-tittle">Hitman's Wife's<br/>Bodyguard</h1>
            <p>Releasing 10 april</p>
            <a href="#" class="watch-btn">
                <i class="fa fa-solid fa-play"></i>
                <span>Watch the triler</span>
            </a>
        </div>
    </section>
  )
}
