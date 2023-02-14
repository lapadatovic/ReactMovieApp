import React,{ useEffect,useState} from 'react'
import './showsPage.css'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTVShows, selectAllTVShows } from '../../features/tvShows/TVShowSlice'
import TrendingShowCard from '../TrendingShowCard/TrendingShowCard'
import { Link } from 'react-router-dom'

export default function ShowsPage() {

    const dispatch = useDispatch();
    const [shows, setshows] = useState([]);
    const [noOfDisplayedShows, setNoOfDisplayedShows] = useState(8)
    const fetchedShows = useSelector((state) => selectAllTVShows(state));


    const slice =fetchedShows.slice(0,noOfDisplayedShows);
    
    const loadMore = () => {
        setNoOfDisplayedShows(noOfDisplayedShows + 4)
    }
 
  useEffect(()=>{
    dispatch(fetchTVShows())
  },[dispatch])

  useEffect(()=>{
    setshows(slice.map((show) => 
        <TrendingShowCard key={show.id} show={show}/> 
      ))
  },[fetchTVShows, noOfDisplayedShows])


  return (
    <section class="all-shows container" id="shows">
        <div class="all-shows-heading trending-heading">
            <h2 class="heading-tittle">Shows</h2>
        </div>
        <div class="movies-content">
            {shows}
        </div>
        {shows.length >= noOfDisplayedShows ? <LoadMoreButton handleClick={() => loadMore()}/> : ''}
    </section>
  )
}
