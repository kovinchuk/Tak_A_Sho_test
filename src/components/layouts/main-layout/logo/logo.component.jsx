import React from 'react';

// Styles
import './logo.styles.scss';

const label = 'Interior Design Ideas';
const prefix = 'logo';

const Logo = () => {
  return (
    <div className={prefix}>
      <h1 className={`${prefix}__label`}>{label}</h1>
    </div>
  );
};

export { Logo };
