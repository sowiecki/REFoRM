import React, { PropTypes } from 'react';

export default class ExampleRoot extends React.Component {
  render() {
    const example = this.props.data.toJS().example;
    return (
      <div>
        Example param {example}
      </div>
    );
  }
}

ExampleRoot.propTypes = {
  data: PropTypes.object.isRequired
};
