import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../actions';

// NavBar is dumb component as it has nothing to store in state
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut() {
    this.props.signoutUser();
  }

  render() {
    if (this.props.auth) {
      return (
        <div className="Navbar">
          <Link to="/" className="siteName">Blogger</Link>
          <Link to="/" onClick={this.onSignOut}>Sign Out</Link>
          <Link to="posts/new">New</Link>
        </div>
      );
    } else {
      return (
        <div className="Navbar">
          <Link to="/" className="siteName">Blogger</Link>
          <Link to="signin">Sign In</Link>
          <Link to="posts/new">New</Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    auth: state.auth.auth,
  }
);

export default connect(mapStateToProps, actions)(NavBar);
