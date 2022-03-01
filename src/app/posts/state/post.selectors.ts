import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const POST_STATE_NAME = 'posts';

const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = () => {
  return createSelector(getPostsState, (state: PostsState) => state.posts);
};

export const getPostById = (props: { id: string }) => {
  return createSelector(getPostsState, (state: PostsState) =>
    state.posts.find((post) => post.id === props.id)
  );
};
