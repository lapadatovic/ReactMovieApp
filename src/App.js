import './App.css';
import Layout from './components/Layout/Layout';
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import MoviesPage from './components/MoviesPage/MoviesPage';

function App() {
  return (
    <div className="app">
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element={<MovieDetail/>}/>
      </Route>
    </Routes>
    </div>
  );
}
export default App;
