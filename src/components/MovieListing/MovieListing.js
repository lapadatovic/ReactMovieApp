import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './movieListing.css'

export default function MovieListing() {
  return (
    <section class="movies container" id="movies">
        <div class="heading">
            <h2 class="heading-tittle">Movies And Shows</h2>
        </div>
        <div class="movies-content">
            {/*movies cards*/}
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    </section>
  )
}
