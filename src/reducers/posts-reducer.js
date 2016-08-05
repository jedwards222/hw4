import { ActionTypes } from '../actions';

const PostsReducer = (state = { all: [{ id: 1, title: 'First', text: 'This is my first blog post!', tags: ['fun ', 'happy '] }], post: 1 }, action) => {
  switch (action.type) {
    case ActionTypes.DECREMENT:
      return state;
    case ActionTypes.FETCH_POSTS:
      return () => {
        // state = {
        //   // all: ,
        // };
      };
    default:
      return state;
  }
};

export default PostsReducer;
