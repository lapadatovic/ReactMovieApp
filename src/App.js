import './App.css';
import Layout from './components/Layout/Layout';
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Trending from './components/Trending/Trending';
function App() {
  return (
    <div className="app">
    <Layout />
    <Routes>
      <Route index element={<Home/>}/>
      {/* <Route to= 'trending' element={<Trending/>} /> */}
      <Route to='/movie/:movieId' element={<MovieDetail />}/>
    </Routes>
      <Outlet></Outlet>
    </div>
  );
}
export default App;
