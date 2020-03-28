import React from 'react';
import PropTypes from 'prop-types';
// import List from './List.jsx';

const Ex04 = (props => <div className="ex04"><h1>{"Ex04 - Propriété d'un composant 4"}</h1><ul>{props.data.map((tests, index) => <li key={index}>{tests}</li>)}</ul></div>);

Ex04.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number).isRequired,
};

Ex04.defaultProps = {
  data: [13, 420, 42, 7, 4, 8, 3, 17, 30, -1, 0],
};

export default Ex04;
