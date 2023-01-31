import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <div class="nav container">
        <Link className='link-logo' to='/'>
          <a href="index.html" class="logo">
              Movie<span>Time</span>
          </a>
        </Link>
          <div class="search-box">
                <input type="search" name="" id="search-input" placeholder="Search movie" />
                <i class="fa fa-solid fa-magnifying-glass"></i>
          </div>
          <a href="#" class="user">
              <img src="/assets/user/user.jpg" class="user-img" alt="" />
          </a>
      </div>
    </header>
  )
}
