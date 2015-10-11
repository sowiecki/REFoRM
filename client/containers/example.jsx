import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ExampleRoot from '../components/example';
import Loading from '../components/common/loading';

import * as ExampleActions from '../actions/example';

class ExampleContainer extends React.Component {
  constructor(props) {
    super(props);

    this.hasData = this.hasData.bind(this);
  }

  componentWillMount() {
    const { fetchExample, params } = this.props;
    fetchExample(params);
  }

  hasData() {
    return this.props.example.size;
  }

  renderExampleRoot() {
    return (
      <ExampleRoot data={this.props.example}/>
    );
  }

  renderLoading() {
    return (
      <Loading/>
    );
  }

  render() {
    if (this.hasData()) {
      return this.renderExampleRoot();
    } else {
      return this.renderLoading();
    }
  }
}

ExampleContainer.propTypes = {
  fetchExample: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    example: state.example
  };
}

export default connect(
  mapStateToProps,
  ExampleActions
)(ExampleContainer);
