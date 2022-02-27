import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Increment]');
export const decrement = createAction('[Decrement]');
export const reset = createAction('[Reset]');
export const customIncrement = createAction(
  '[Custom increment]',
  props<{ value: number }>()
);
export const changeProjectName = createAction('[Change project name]');
