import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(decrement, (state) => ({ ...state, counter: state.counter + 1 })),
  on(increment, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
