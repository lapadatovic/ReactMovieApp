import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    
  return (
    <div class="navbar">
        <Link to='/'>
            <a href="#home" class="nav-link">
                <i class="fa fa-solid fa-house-user"></i>
                <span class="nav-link-title">Home</span>
            </a>
        </Link>
        <Link to='movies'>
            <a class="nav-link">
                <i class="fa fa-thin fa-film"></i>
                <span class="nav-link-title">Movies</span>
            </a>
        </Link>
        <Link to='shows'>
            <a class="nav-link">
                <i class="fa fa-thin fa-tv"></i>
                <span class="nav-link-title">Shows</span>
            </a>
        </Link>
    </div>
  )
}
