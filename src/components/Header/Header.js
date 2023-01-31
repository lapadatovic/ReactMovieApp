import React from 'react'
import './header.css'
export default function Header() {
  return (
    <header>
      <div class="nav container">
          <a href="index.html" class="logo">
              Movie<span>Time</span>
          </a>
          <div class="search-box">
                <input type="search" name="" id="search-input" placeholder="search movie" />
                <i class="fa fa-solid fa-magnifying-glass"></i>
          </div>
          <a href="#" class="user">
              <img src="/assets/user/user.jpg" class="user-img" alt="" />
          </a>
          <div class="navbar">
              <a href="#home" class="nav-link nav-active">
                  <i class="fa fa-solid fa-house-user"></i>
                  <span class="nav-link-title">Home</span>
              </a>
              <a href="#popular" class="nav-link">
                  <i class="fa fa-solid fa-fire"></i>
                  <span class="nav-link-title">Trending</span>
              </a>
              <a href="#movies" class="nav-link">
                  <i class="fa fa-regular fa-compass"></i>
                  <span class="nav-link-title">Explore</span>
              </a>
              <a href="play-page.html" class="nav-link">
                  <i class="fa fa-solid fa-tv"></i>
                  <span class="nav-link-title">Movies</span>
              </a>
              <a href="#home" class="nav-link">
                  <i class="fa fa-regular fa-heart"></i>
                  <span class="nav-link-title">Favourite</span>
              </a>
          </div>
      </div>
    </header>
  )
}
