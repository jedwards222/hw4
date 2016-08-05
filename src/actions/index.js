// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  // CREATE_POST: 'CREATE_POST',
  // UPDATE_POST: 'UPDATE_POST',
  // DELETE_POST: 'DELETE_POST',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_POSTS, payload: { stuff: '' } });
  };
}

export function createPost(post) { /* axios post */ }

export function updatePost(post) { /* axios put */ }

export function fetchPost(id) { /* axios get */ }

export function deletePost(id) { /* axios delete */ }


export function increment() {
  return {
    type: ActionTypes.INCREMENT,
    payload: null,
  };
}

export function decrement() {
  return {
    type: ActionTypes.DECREMENT,
    payload: null,
  };
}
