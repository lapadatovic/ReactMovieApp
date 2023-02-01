import React from 'react'
import './sidebar.css'
import { Link, Outlet} from 'react-router-dom'
export default function Sidebar() {
  return (
    <div class="navbar">
        <Link to='/'>
            <a href="#home" class="nav-link nav-active">
                <i class="fa fa-solid fa-house-user"></i>
                <span class="nav-link-title">Home</span>
            </a>
        </Link>
        <Link to='trending'>
            <a href="#popular" class="nav-link">
                <i class="fa fa-solid fa-fire"></i>
                <span class="nav-link-title">Trending</span>
            </a>
        </Link>
        <Link to='/expolore'>
            <a href="#movies" class="nav-link">
                <i class="fa fa-regular fa-compass"></i>
                <span class="nav-link-title">Explore</span>
            </a>
        </Link>
        <Link to='movies'>
            <a href="play-page.html" class="nav-link">
                <i class="fa fa-solid fa-tv"></i>
                <span class="nav-link-title">Movies</span>
            </a>
        </Link>
        <Link to='favourite'>
            <a href="#home" class="nav-link">
                <i class="fa fa-regular fa-heart"></i>
                <span class="nav-link-title">Favourite</span>
            </a>
        </Link>
    </div>
  )
}
