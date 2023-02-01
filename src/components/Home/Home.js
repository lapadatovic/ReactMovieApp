import React, { useEffect } from 'react'
import './home.css'
import Banner from '../Banner/Banner'
import MovieListing from '../MovieListing/MovieListing'
import axios from 'axios'
import movieAPI from '../../common/apis/movieAPI'
import {APIKey} from '../../common/apis/MovieAPIKey'

export default function Home() {
  
  useEffect(() =>{
    const fetchMovies = async () => {
    const response = await movieAPI.get(`/trending/all/day?api_key=${APIKey}`)
      .catch((err) =>{
        console.log(err.message);
      })
    console.log(response.data);
    };

    fetchMovies();
  },[])

  return (
    <>
      <Banner />
      <MovieListing />
    </>
  )
}
