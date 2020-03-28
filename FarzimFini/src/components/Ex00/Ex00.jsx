import React, {useState} from 'react';

const Ex00 = () => {
  const [compt, setCount] = useState(0);

  const handleClick = (() => {
    setCount(compt + 1);
  });
  return (
    <div className="ex00">
      <h1>Ex00 - Etat d un composant</h1>
      <button onClick={handleClick} >Compter</button>
      <p>Il y a eu {compt} clic(s)</p>
    </div>
  );
};

export default Ex00;
