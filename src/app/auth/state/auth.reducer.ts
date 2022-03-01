import { createReducer } from '@ngrx/store';
import { initialState } from 'src/app/posts/state/posts.state';

const _authReducer = createReducer(initialState);

export function authReducer(state, action) {
  return _authReducer(state, action);
}
