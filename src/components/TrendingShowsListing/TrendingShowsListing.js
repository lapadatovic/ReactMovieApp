import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Navigation } from 'swiper'
import { Link } from 'react-router-dom';
import { fetchTVShows, selectAllTVShows } from '../../features/tvShows/TVShowSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import TrendingShowCard from '../TrendingShowCard/TrendingShowCard'
import 'swiper/css';
import "swiper/css/pagination";


export default function TrendingShowsListing() {

  const dispatch = useDispatch();
  const trendingShows = useSelector((state) => selectAllTVShows(state));
  const [shows, setShows] = useState();

  //Collect data
  useEffect(()=>{
    dispatch(fetchTVShows())
  },[dispatch])
  
  useEffect(()=>{
    setShows(Array.from(trendingShows).map((show) => {
      return(
      <SwiperSlide>
        <Link style={{textDecoration:'none', color:'white'}} to='shows/:showId'>
          <TrendingShowCard key={show.id} show={show}/>
        </Link>
      </SwiperSlide>)
    }))
  },[trendingShows])

  return (
    <section class="shows container" id="shows">
        <div class="heading">
            <h2 class="heading-tittle">Trending Shows</h2>
        </div>
        <div class="shows-content">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              // navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {shows}
            </Swiper>
        </div>
    </section>
  )
}
