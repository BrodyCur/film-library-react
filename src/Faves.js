import React, {useState} from 'react';

const Faves = ({onFaveToggle}) => {

  const [isFave, setIsFave] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isFave === false) {
      setIsFave(true);
      e.target.classList.add('remove_from_queue');
      e.target.classList.remove('add_to_queue');
      e.target.innerText = 'remove_from_queue';
    } else if (isFave === true) {
      setIsFave(false);
      e.target.classList.add('add_to_queue');
      e.target.classList.remove('remove_from_queue');
      e.target.innerText = 'add_to_queue';
    };

    onFaveToggle();
  }

  return (
    <div className="film-row-fave" onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </div>
  );
};

export default Faves;