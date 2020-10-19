import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import './button.styles.scss';

const propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'normal']),
  type: PropTypes.oneOf(['button', 'submit']),
};

const defaultProps = {
  theme: 'primary',
  disabled: false,
  type: 'button',
  size: 'normal',
};

const prefix = 'button';

const Button = ({ theme, size, className, type, ...otherProps }) => {
  const btnClass = classNames(
    className,
    prefix,
    `${prefix}--${theme}`,
    size && `${prefix}--${size}`,
  );

  return <button type={type} className={btnClass} {...otherProps} />;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.displayName = 'Button';

export { Button };
