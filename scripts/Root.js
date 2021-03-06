import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import TribePage from './pages/TribePage';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <Route name='home' path='/' component={App}>
          <Route name='tribe' path='/tribe/:name' component={TribePage} />
        </Route>
      </Router>
    );
  }
}
