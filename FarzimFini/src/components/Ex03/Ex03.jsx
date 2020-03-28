import React, {useState} from 'react';
import {Ex03Text} from './Exo03Text.jsx';

const Ex03 = () => {
  const [compt, setCompt] = useState(0);

  const handleCLick = () => setCompt(compt + 1);
  return (
    <div className="ex03">
      <h1>{"Exo03 - Etat d'un composant 3"}</h1>
      <button onClick={handleCLick}>Click</button>
      <Ex03Text text={compt === 0 ? "Il n'y a pas encore eu de click" : `Il y a eu ${compt} click${compt > 1 ? 's' : ''}`}></Ex03Text>
    </div>
  );
};

export default Ex03;
