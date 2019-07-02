import React, {useState} from 'react';
import FilmList from './FilmListing';
import axios from 'axios';
import FilmDetails from './FilmDetails';

const App = () => {

  const [faves, setFaves] = useState([]);
  const [currentFilm, setCurrentFilm] = useState({});

  const onFaveToggle = (film) => {
    const favesCopy = faves.slice();
    if (faves.includes(film)) {
      console.log('already inside faves list');
      favesCopy.splice(faves.indexOf(film), 1);
      setFaves([favesCopy]);
    } else {
      console.log('lets add that badboy');
      setFaves([...favesCopy, film]);
    };
    console.log(faves)
  };

  const handleFilmDetails = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    // console.log(url);
    // console.log('current film title', film.title);

    axios.get(url)
    .then((response) => {
      setCurrentFilm(response.data);
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return (
    <main className="film-library">
      <div className="film-list">
        <h1 className="section-title">Films</h1>
        <FilmList onFaveToggle={onFaveToggle} faves={faves} handleFilmDetails={handleFilmDetails}/>
      </div>
      <div className="film-details">
        <h1 className="section-title">Details</h1>
        <FilmDetails currentFilm={currentFilm} />
      </div>

    </main>
  );
}

export default App;