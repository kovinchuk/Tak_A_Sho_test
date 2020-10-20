import React from 'react';
import PropTypes from 'prop-types';

// STYLES
import './stat.styles.scss';

const propTypes = {
  count: PropTypes.number,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const defaultProps = {
  count: 0,
};

const prefix = 'stat';

const Stat = ({ count, icon, alt }) => {
  return (
    <div className={prefix}>
      <img className={`${prefix}__icon`} src={icon} alt={alt} />
      <span className={`${prefix}__count`}>{count}</span>
    </div>
  );
};

Stat.propTypes = propTypes;
Stat.defaultProps = defaultProps;

export { Stat };
