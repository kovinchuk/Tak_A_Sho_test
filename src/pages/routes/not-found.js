import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>Oops!</h1>
      <p>The page you are looking for doesn`t exist</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export { NotFound };
