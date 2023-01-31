import React from 'react'
import './layout.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <Header/>
        <Sidebar />
        <Outlet />
    </div>
  )
}
