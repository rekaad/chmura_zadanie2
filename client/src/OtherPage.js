import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Im some other page!
      <h4>Multifib - zadanie 2</h4>
      <h4>Radosław Młynek</h4>
      <h4>Grupa 2.3</h4>
      <Link to="/">Go back home</Link>
    </div>
  );
};
