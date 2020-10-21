import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';

// Styles
import styles from './not-found.styles.scss';

const cx = cn.bind(styles);

const NotFound = () => {
  return (
    <div className={cx('notfound')}>
      <h1>Oops!</h1>
      <p>The page you are looking for doesn't exist</p>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export { NotFound };
