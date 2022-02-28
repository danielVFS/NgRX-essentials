import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/counter/app.state';
import { Post } from 'src/app/models/post.model';
import { getPostById } from '../state/post.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {
  postId: string;
  post: Post;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => (this.postId = param.get('id')));
    this.store
      .select(getPostById({ id: this.postId }))
      .subscribe((data) => console.log(data));
  }
}
