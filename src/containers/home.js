import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Home = (props) => {
  return (
    <div>
      <h2>Posts</h2>
      <ul>
      {
        props.posts.map((post) => {
          return (
            <li key={post.id} className="postSummary">
              <Link to="posts/:1">{post.title}</Link>
              {post.tags.map((tag) => {
                return (
                  tag
                );
              })}
            </li>
          );
        })
      }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);


// react-redux glue -- outputs Container that knows how to call actions
export default connect(mapStateToProps, null)(Home);
