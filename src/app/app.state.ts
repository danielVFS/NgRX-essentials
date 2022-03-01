import { authReducer } from './auth/state/auth.reducer';
import { AuthState } from './auth/state/auth.state';
import { postsReducer } from './posts/state/posts.reducer';
import { PostsState } from './posts/state/posts.state';
import { counterReducer } from './counter/state/counter.reducer';
import { CounterState } from './counter/state/counter.state';

export type AppState = {
  counter: CounterState;
  posts: PostsState;
  auth: AuthState;
};

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
  auth: authReducer,
};
