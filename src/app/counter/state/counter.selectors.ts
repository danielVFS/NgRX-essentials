import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const COUNTER_STATE_NAME = 'counter';

const getCounterState =
  createFeatureSelector<CounterState>('COUNTER_STATE_NAME');

export const getCounter = createSelector(
  getCounterState,
  (state: CounterState) => state.counter
);

export const getProjectName = createSelector(
  getCounterState,
  (state: CounterState) => state.projectName
);
