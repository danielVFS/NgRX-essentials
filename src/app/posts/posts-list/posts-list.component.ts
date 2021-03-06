import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Post } from 'src/app/models/post.model';
import { getPosts } from '../state/post.selectors';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts());
  }

  onDeletePost(id: string) {
    if (confirm('Are you sure you want to delete the post?')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}
