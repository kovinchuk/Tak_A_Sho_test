import React from 'react';

// Styles
import './header.styles.scss';

// Components
import { Logo } from '../logo';
import { Button } from 'components/UI/button';

const prefix = 'header';

const Header = () => {
  return (
    <header className={prefix}>
      <div className={`${prefix}__logo`}>
        <Logo />
        <div className={`${prefix}__slogan`}>
          Find interior design inspiration for your home
        </div>
      </div>
      <div className={`${prefix}__filter-btn`}>
        <Button>
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
