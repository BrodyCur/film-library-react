import React from 'react';

const FilmDetails = ({currentFilm}) => {
  let details;

  if(currentFilm.id) {
    console.log('Great success, so proud', currentFilm);

    const backdropURL = `https://image.tmdb.org/t/p/w1280/${currentFilm.backdrop_path}`;

    details = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropURL} alt="" />
          <h1 className="film-title">{currentFilm.title}</h1>
        </figure>
      </div>
    )
  } else {
    details = (
      <div>
        No Film Selected
      </div>
    )
  }

  return (
    <div>{details}</div>
  );
};

export default FilmDetails;