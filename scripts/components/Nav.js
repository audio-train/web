import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  static propTypes = {
    links: PropTypes.arrayOf(PropTypes.object)
  };

  constructor(props) {
    super(props);

    

    this.props = props;

    this.state = {
      links: props.links
    }
  }

  renderLinks() {
    return this.state.links.map((link) => {
      return <li><Link to={link.to}>{link.name}</Link></li>;
    });
  }

  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Audio Tribe</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {this.renderLinks()}
          </ul>
        </div>
      </nav>
    )
  }
}
