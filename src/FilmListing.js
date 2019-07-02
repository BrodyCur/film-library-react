import React, {useState, useRef} from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';
// import { all } from 'q';

const FilmList = ({onFaveToggle, faves, handleFilmDetails}) => {

  const [filter, setFilter] = useState('all');

  const allRef = useRef();
  const favesRef = useRef();

  const handleFilterClick = (filter) => {
    console.log('setting filter to', filter)
    setFilter(filter);
    if (filter === 'all') {
      allRef.current.classList.add('is-active');
      favesRef.current.classList.remove('is-active');
    } else if (filter === 'faves') {
      favesRef.current.classList.add('is-active');
      allRef.current.classList.remove('is-active');
    };

    console.log(allRef, favesRef)
  };

  const allFilms = TMDB.films;
  const films = filter === 'faves' ? faves : allFilms;
  const filmList = films.map(film => {
    return (<FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} faves={faves} handleFilmDetails={handleFilmDetails}/>)
  })

  return (
    <div>
      <nav className="film-list-filters">
        <button ref={allRef} className="film-list-filter" onClick={() => {handleFilterClick('all')}}>
          ALL
          <span className="section-count">{allFilms.length}</span>
        </button>
        <button ref={favesRef} className="film-list-filter" onClick={() => {handleFilterClick('faves')}}>
          FAVES
          <span className="section-count">{faves.length}</span>
        </button>
      </nav>
      {filmList}
    </div>
  );
};

export default FilmList;