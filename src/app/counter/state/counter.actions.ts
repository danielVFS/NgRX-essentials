import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Page] increment');
export const decrement = createAction('[Counter Page] decrement');
export const reset = createAction('[Counter Page] reset');
export const customIncrement = createAction(
  '[Counter Page] custom increment',
  props<{ value: number }>()
);
export const changeProjectName = createAction(
  '[Counter Page] change project name'
);
