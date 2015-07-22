import React, { PropTypes } from 'react';

import Nav from './components/Nav';

require('./../node_modules/materialize-css/bin/materialize.css')

export default class App {
  static propTypes = {
    children: PropTypes.object
  };

  static links = [
    {to: "record", name: "Record" }
  ];

  render() {
    return (
      <div>
        <h1>Audio Tribe</h1>
        <Nav links={this.links} />
      </div>
    );
  }
}
