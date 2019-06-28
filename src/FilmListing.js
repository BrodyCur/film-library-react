import React, {useState, useRef} from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';
import { all } from 'q';

const FilmList = ({onFaveToggle, faves}) => {

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

  return (
    <div>
      <div className="film-list-filters">
        <div ref={allRef} className="film-list-filter" onClick={() => {handleFilterClick('all')}}>
          ALL
          <span className="section-count">{TMDB.films.length}</span>
        </div>
        <div ref={favesRef} className="film-list-filter" onClick={() => {handleFilterClick('faves')}}>
          FAVES
          <span className="section-count">0</span>
        </div>
      </div>
      {TMDB.films.map((film) => {
          return (<FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} faves={faves}/>)
      })}
    </div>
  );
};

export default FilmList;