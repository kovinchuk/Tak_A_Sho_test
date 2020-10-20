import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Spinner } from 'components/UI/spinner';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  Component: PropTypes.element.isRequired,
};

const withSpinner = Component => {
  return props => {
    const { isLoading, ...otherProps } = props;

    return isLoading ? <Spinner /> : <Component {...otherProps} />;
  };
};

withSpinner.propTypes = propTypes;

export { withSpinner };
