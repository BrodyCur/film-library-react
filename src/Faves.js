import React from 'react';

const Faves = ({onFaveToggle}) => {

  const handleClick = (e) => {
    e.stopPropagation();
    console.log('Fave was clicked!');
    onFaveToggle();
  }

  return (
    <div className="film-row-fave add_to_que" onClick={handleClick}>
      <p className="material-icons">add_to_que</p>
    </div>
  );
};

export default Faves;