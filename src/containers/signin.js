import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../actions';

// smart component keeps its own state
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
  }

  onNameChange(event) {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  }
  onPassChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  onSignIn(event) {
    this.props.signinUser({ email: this.state.username, password: this.state.password });
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    return (
      <div className="NewFields">
        <input onChange={this.onNameChange} placeholder="username" value={this.state.title} />
        <input onChange={this.onPassChange} placeholder="password" value={this.state.content} />
        <Link className="SignupLink" to="signup">No Account? Sign up here so you can avoid seeing this terrible color!</Link>
        <button onClick={this.onSignIn} className="signInButton">
          Sign In!
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
