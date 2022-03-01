import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from 'src/app/counter/app.state';
import { Post } from 'src/app/models/post.model';
import { getPostById } from '../state/post.selectors';
import { udpdatePost } from '../state/posts.actions';

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

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

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

  onUpdatePost(): void {
    if (!this.postForm.valid) return;

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const post: Post = {
      ...this.post,
      title,
      description,
    };

    this.store.dispatch(udpdatePost({ post }));
    this.router.navigate(['/posts']);
  }

  hasTitleError(): boolean {
    const titleForm = this.postForm.get('title');
    if (titleForm.touched && !titleForm.valid) {
      return titleForm.errors['minlength'] || titleForm.errors['required'];
    }
  }

  showTitleErrors(): string {
    const titleForm = this.postForm.get('title');
    if (titleForm.touched && !titleForm.valid) {
      if (titleForm.errors['required']) return 'Title is required';
      if (titleForm.errors['minlength'])
        return 'Title should have at least 6 characters';
    }
  }

  hasDescriptionError(): boolean {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      return (
        descriptionForm.errors['minlength'] ||
        descriptionForm.errors['required']
      );
    }
  }

  showDescriptionErrors(): string {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors['required']) return 'Description is required';
      if (descriptionForm.errors['minlength'])
        return 'Description should have at least 10 characters';
    }
  }
}
