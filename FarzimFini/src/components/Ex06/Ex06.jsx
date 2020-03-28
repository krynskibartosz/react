import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Ex06 = props => {
  const [count, setCount] = useState(0);
  const [tableau, setTableau] = useState(props.data);
  const tab = tableau.slice();

  const handleAdd = () => {
    setCount(count + 1);
    tab.push(count);
    setTableau(...[tab]);
  };

  const handleDelete = arr => {
    tab.splice(arr, 1);
    setTableau(...[tab]);
  };

  return (
    <div className="ex06">
      <h1>Ex06 - State & Listes</h1>
      <code className={'res'}>
        <button onClick={handleAdd}>Ajouter un élément</button>
        <ul>
          {tableau.map((arr, index) => <li onClick={(() => handleDelete(index, arr))} key={index} id={index}>{arr}</li>)}
        </ul>
      </code>
    </div>
  );
};

Ex06.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
};

Ex06.defaultProps = {
  data: [13, 420, 42, 7, 4, 8, 3, 17, 30],
};

export default Ex06;
