import React, { Component } from 'react';

import * as actions from '../actions';
import { connect } from 'react-redux';

// function based "dumb" component with no state
class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      content: '',
      title: '',
      tags: '',
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onEditChange = this.onEditChange.bind(this);
  }

  onTitleChange(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }
  onContentChange(event) {
    console.log(event.target.value);
    this.setState({ content: event.target.value });
  }
  onTagsChange(event) {
    console.log(event.target.value);
    this.setState({ tags: event.target.value });
  }

  onEditChange(event) {
    if (this.state.editing) {
      this.setState({
        editing: false,
      });
    } else {
      this.setState({
        editing: true,
        title: this.props.posts[0].title,
        content: this.props.posts[0].content,
        tags: this.props.posts[0].tags,
      });
    }
  }

  render() {
    if (this.state.editing) {
      return (
        <div className="NewFields">
          <input onChange={this.onTitleChange} placeholder="title" value={this.state.title} />
          <input onChange={this.onContentChange} placeholder="content" value={this.state.content} />
          <input onChange={this.onTagsChange} placeholder="tags" value={this.state.tags} />
          <button onClick={this.onEditChange}>
            Done
          </button>
        </div>
      );
    } else {
      return (
        <div className="NewFields">
          <div>{this.props.posts[0].title}</div>
          <div>{this.state.content}</div>
          <div>Tags: {this.state.tags}</div>
          <button onClick={this.onEditChange}>
            Edit
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
    post: state.posts.post,
  }
);

export default connect(mapStateToProps, actions)(Show);
