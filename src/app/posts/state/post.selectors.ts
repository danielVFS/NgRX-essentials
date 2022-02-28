import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = () => {
  return createSelector(getPostsState, (state: PostsState) => state.posts);
};

export const getPostById = (props: { id: string }) => {
  return createSelector(getPostsState, (state: PostsState) =>
    state.posts.find((post) => post.id === props.id)
  );
};
