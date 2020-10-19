import React from 'react';
import { Link } from 'react-router-dom';

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
      return (
        <div>
          <div>
            <h1>Упс!</h1>
            <p>Запрашиваемая страница не существует</p>
            <Link to="/">Вернуться на главную</Link>
          </div>
        </div>
      );
    }
    return children;
  }
}
