import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './content.styles.scss';

const propTypes = {
  children: PropTypes.element.isRequired,
};

const Content = props => {
  const { children } = props;

  return <div className="content">{children}</div>;
};

Content.propTypes = propTypes;

export { Content };
