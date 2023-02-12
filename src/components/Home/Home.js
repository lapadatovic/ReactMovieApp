import React, { useEffect } from 'react'
import './home.css'
import Banner from '../Banner/Banner'
import MovieListing from '../MovieListing/MovieListing'
import TrendingShowsListing from '../TrendingShowsListing/TrendingShowsListing'
export default function Home() {
  return (
    <>
      <Banner />
      <MovieListing />
      <TrendingShowsListing />
    </>
  )
}
