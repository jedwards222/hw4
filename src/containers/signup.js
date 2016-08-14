import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

// smart component keeps its own state
class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onPassChange = this.onPassChange.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
  }

  onNameChange(event) {
    console.log(event.target.value);
    this.setState({ username: event.target.value });
  }
  onPassChange(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  onSignUp(event) {
    this.props.signupUser({ email: this.state.username, password: this.state.password });
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
        <button onClick={this.onSignUp} className="signUpButton">
          Sign Up!
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
