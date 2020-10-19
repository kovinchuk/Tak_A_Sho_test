import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Header } from './header';
import { Content } from './content';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const MainLayout = ({ children, ...otherProps }) => {
  return (
    <div className="layout">
      <Header {...otherProps} />
      <Content>{React.cloneElement(children, { ...otherProps })}</Content>
    </div>
  );
};

MainLayout.propTypes = propTypes;

export { MainLayout };
