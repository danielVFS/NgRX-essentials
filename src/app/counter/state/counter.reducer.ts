import { createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  customIncrement,
} from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 })),
  on(customIncrement, (state, { value }) => ({
    ...state,
    counter: state.counter + value,
  }))
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
