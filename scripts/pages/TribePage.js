import React, { PropTypes } from 'react';

/**
 * Requests data from server for current props.
 */
function requestData(props) {
  const { params } = props;
  const fullName = parseFullName(params);

  RepoActionCreators.requestRepo(fullName);
  UserActionCreators.requestStargazerPage(fullName, true);
}

export default class TribePage {
  static propTypes = {
    // Injected by React Router:
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
  };

  constructor() {
  }

  componentWillMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { repo, owner, params } = this.props;
    const fullName = parseFullName(params);

    return (
      <h1>Tribe</h1>
    );
  }
}
