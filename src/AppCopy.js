import './App.css';
import React, {useEffect, useState} from 'react';
import Header from './Header';
import ContentList from './ContentList';
import Search from './Search';

function App() {

  const [fetchMovies, setFetchMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("");

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then(r => r.json())
    .then(setFetchMovies)
  }, []);

  const filteredArray = fetchMovies.filter((eachMovie) => {
    return eachMovie.title.toLowerCase().includes(searchMovies.toLowerCase())
    || eachMovie.release_date.includes(searchMovies);
  });

  return (
    <div> 
     <Header />
     <Search setSearchMovies={setSearchMovies}/>
     <ContentList fetchMovies={filteredArray}/>
    </div>
  );
}

export default App;