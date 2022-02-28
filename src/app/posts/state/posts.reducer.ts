import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { addPost } from './posts.actions';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post, id: (state.posts.length + 1).toString() };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
