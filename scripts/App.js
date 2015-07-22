import React, { PropTypes } from 'react';


export default class App {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return {
      <h1>Audio Tribe</h1>
    };
  }
}
