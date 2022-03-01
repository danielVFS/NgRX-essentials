import { createReducer, on } from '@ngrx/store';
import { addPost, deletePost, udpdatePost } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    const post = { ...action.post, id: (state.posts.length + 1).toString() };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(udpdatePost, (state, action) => {
    const updatedPosts = state.posts.map((post) =>
      post.id === action.post.id ? action.post : post
    );
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePost, (state, { id }) => {
    const notDeletedPosts = state.posts.filter((post) => post.id !== id);
    return {
      ...state,
      posts: notDeletedPosts,
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
