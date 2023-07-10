import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { getMovieList } from './components/api'
import { MovieWraper } from './components/MovieWraper';

function App() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setMovieList(result.data.results)
    })
    // console.log(movieList)
  }, [])
  return (
    <div className='bg-slate-900 min-h-screen flex flex-col justify-center items-center gap-6'>
      <Header />
      <Search setMovieList={setMovieList}/>
      <MovieWraper props={movieList}/>
    </div>
  );
}

export default App;
