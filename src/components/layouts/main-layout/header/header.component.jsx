import React from 'react';
import { useDispatch } from 'react-redux';

// Styles
import './header.styles.scss';

// Components
import { Logo } from '../logo';
import { Button } from 'components/UI/button';

// Actions
import { sortInspirationCards } from 'actions';

const prefix = 'header';

const Header = () => {
  const dispatch = useDispatch();

  const sortHandleClick = () => {
    dispatch(sortInspirationCards());
  };

  return (
    <header className={prefix}>
      <div className={`${prefix}__logo`}>
        <Logo />
        <div className={`${prefix}__slogan`}>
          Find interior design inspiration for your home
        </div>
      </div>
      <div className={`${prefix}__filter-btn`}>
        <Button onClick={sortHandleClick}>
          Filter and sort{' '}
          <span role="img" aria-label="filter">
            👉
          </span>
        </Button>
      </div>
    </header>
  );
};

export { Header };
