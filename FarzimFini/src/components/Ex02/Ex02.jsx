import React, {useState} from 'react';

const Ex02 = () => {
  const [compt, setCompt] = useState(0);
  const handleClick = () => setCompt(compt + 1);
  return (
    <div className="ex02">
      <h1>{"Ex02 - Etat d'un composant 2"}</h1>
      <button onClick={handleClick}>Compter</button>
      <p>
        {compt === 0 ? "Il n'y a pas encore eu de clic." : `Il y a eu ${compt} clic${compt > 1 ? 's' : ""}`}
      </p>
    </div>
  );
};

export default Ex02;
