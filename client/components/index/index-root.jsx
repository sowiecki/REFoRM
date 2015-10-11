import React from 'react';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  componentDidMount() {
    document.title = 'Index';
  },
  render() {
    return (
      <div>
        Index page
      </div>
    );
  }
});
