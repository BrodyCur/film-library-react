import React from 'react';
import TMDB from './TMDB';
import FilmRow from './FilmRow';

const FilmList = ({onFaveToggle, faves}) => {


  const handleFilterClick = () => {

  }

  return (
    <div>
      <nav>
        <button>All</button>
        <button>Faves</button>
      </nav>
      {TMDB.films.map((film) => {
          return (<FilmRow key={film.id} film={film} onFaveToggle={onFaveToggle} faves={faves}/>)
      })}
    </div>
  );
};

export default FilmList;