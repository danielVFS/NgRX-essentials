import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const ADD_POST_ACTION = '[Post Page] add post';
export const UPDATE_POST_ACTION = '[Post Page] update post';
export const DELETE_POST_ACTION = '[Post Page] delete post';

export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const udpdatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);
export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);
