import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
function App() {
  return (
    <div className="app">
    <Header />
    <Routes>
      <Route to='/' element={<Home/>}/>
      <Route to='/movie/:movieId' element={<MovieDetail />}/>
    </Routes>
    </div>
  );
}
export default App;
