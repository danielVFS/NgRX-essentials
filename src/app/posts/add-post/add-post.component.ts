import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Post } from 'src/app/models/post.model';
import { v4 as uuid } from 'uuid';
import { addPost } from '../state/posts.actions';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onAddPost(): void {
    const { title, description } = this.postForm.value;

    const post: Post = {
      title,
      description,
    };

    this.store.dispatch(addPost({ post }));
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
