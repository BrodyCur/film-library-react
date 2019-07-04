import React from 'react';
import Faves from './Faves'

const FilmRow = ({film, onFaveToggle, handleFilmDetails}) => {

  const handleClick = (film) => {
    onFaveToggle(film);
  };

  const handleFilmDetailsClick = (film) => {
    handleFilmDetails(film);
  };

  return (
    <article onClick={() => handleFilmDetailsClick(film)} className="film-row">
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