import React from 'react';

// STYLES
import './spinner.styles.scss';

const prefix = 'spinner';

const Spinner = () => {
  return (
    <div className={prefix}>
      <div className={`${prefix}__container`} />
    </div>
  );
};

export { Spinner };
