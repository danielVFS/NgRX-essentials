import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/counter/app.state';
import { Post } from 'src/app/models/post.model';
import { getPostById } from '../state/post.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  postId: string;
  post: Post;
  postForm: FormGroup;
  postSubscription$: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.postId = param.get('id');
      this.postSubscription$ = this.store
        .select(getPostById({ id: this.postId }))
        .subscribe((data) => {
          this.post = data;
          this.createForm();
        });
    });
  }

  createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnDestroy(): void {
    if (this.postSubscription$) this.postSubscription$.unsubscribe();
  }

  onUpdatePost(): void {}
}
