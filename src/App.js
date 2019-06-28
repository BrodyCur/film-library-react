import React, {useState} from 'react';
import FilmList from './FilmListing'

const App = () => {

  const [faves, setFaves] = useState([]);


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
  }

  return (
    <main className="film-library">
      <div className="film-list">
        <h1 className="section-title">Films</h1>
        <FilmList onFaveToggle={onFaveToggle} faves={faves}/>
      </div>
      <div className="film-details">
        <h1 className="section-title">Details</h1>
      </div>

    </main>
  );
}

export default App;