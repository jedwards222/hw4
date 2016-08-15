import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    // your various component lifecycle methods
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }
    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }

  }

  // mapStateToProps
  const mapStateToProps = (state) => (
    {
      authenticated: state.auth.auth,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}
