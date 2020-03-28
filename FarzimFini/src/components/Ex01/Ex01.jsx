
import React, {useState} from 'react';

const Ex01 = () => {
  const [compt, setCount] = useState(0);

  const handleClick = (() => {
    setCount(compt + 1);
  });
  return (
    <div className="ex01">
      <h1>{"Ex01 - Etat d'un composant 1"}</h1>
      <button onClick={handleClick} >Compter</button>
      <p>Il y a eu {compt} clic{compt >= 2 && 's'}</p>
    </div>
  );
};

export default Ex01 