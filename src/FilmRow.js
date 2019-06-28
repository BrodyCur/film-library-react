import React from 'react';
import Faves from './Faves'

const FilmRow = ({film, onFaveToggle}) => {

  const handleDetailsClick = (film) => {
    console.log(`Fetching details for ${film.title}`)
  }

  const handleClick = (film) => {
    console.log('film', film);
    onFaveToggle(film);
  }

  return (
    <article onClick={() => handleDetailsClick(film)} className="film-row">
      <img src={`https://image.tmdb.org/t/p/w780/${film.poster_path}`} alt={film.title}></img>
      <div className="film-summary">
        <h1>{film.title}</h1>
        <p>{new Date (film.release_date).getFullYear()}</p>
      </div>
      <Faves onFaveToggle={() => handleClick(film)} />
    </article>
  );
};

export default FilmRow;