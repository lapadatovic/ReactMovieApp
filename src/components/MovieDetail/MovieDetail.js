import React from 'react'

export default function MovieDetail({props}) {
  return (
    <>
    <div class="play-container container">
      <img src="play-page/play-background.jpg" alt="" class="play-img"/>
      <div class="play-text">
        <h2>MOVIE/SHOW TITLE</h2>
        <div class="rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div class="tags">
          <span>Action</span>
          <span>Adventure</span>
          <span>4K</span>
        </div>
        <a href="#" class="watch-btn">
          <i class="fa fa-solid fa-play"></i>
          <span>Watch the triler</span>
        </a>
      </div>
      <i class=" play-movie fa-solid fa-play "></i>
      <div class="video-container">
        <div class="video-box">
          {/* <video id="myvideo" src="play-page/Jumanji.mp4" controls></video> */}
          <i class="close-video fa-solid fa-xmark"></i>
        </div>
      </div>
    </div>
    <div class="about-movie container">
      <h2>Jumanji: Welcom To The Joungle</h2>
      <p>When four students play with a magical video game,they are drawn to the joungle world of jumanji,where they are trapped as their avatars.To return to the real world,they must finish the game.</p>
      <h2 class="cast-heading">Movie Cast</h2>
      <div class="cast">
        <div class="cast-box">
          <img src="play-page/cast1.jpg" class="cast-img" alt=""/>
          <span class="cast-tittle">Dwayne Johnson</span>
        </div>
        <div class="cast-box">
          <img src="play-page/cast2.jpg" class="cast-img" alt=""/>
          <span class="cast-tittle">Karen Gillan</span>
        </div>
        <div class="cast-box">
            <img src="play-page/cast3.jpg" class="cast-img" alt=""/>
            <span class="cast-tittle">Kevin Hart</span>
        </div>
        <div class="cast-box">
            <img src="play-page/cast4.jpg" class="cast-img" alt=""/>
            <span class="cast-tittle">Jack Black</span>
        </div>
        <div class="cast-box">
            <img src="play-page/cast5.jpg" class="cast-img" alt=""/>
            <span class="cast-tittle">Nick Jonas</span>
        </div>
        <div class="cast-box">
            <img src="play-page/cast6.jpg" class="cast-img" alt=""/>
            <span class="cast-tittle">Madison Iseman</span>
        </div>
      </div>
    </div>
    </>
  )
}
