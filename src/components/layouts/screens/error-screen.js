import React from 'react';

// Components
import { NotFound } from 'components/not-found';

export class ErrorScreen extends React.Component {
  state = {
    // eslint-disable-next-line
    errorInfo: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      // eslint-disable-next-line
      errorInfo,
    });
  }

  render() {
    const { errorInfo } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      return <NotFound />;
    }
    return children;
  }
}
