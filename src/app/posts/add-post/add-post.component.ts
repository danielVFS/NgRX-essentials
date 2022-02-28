import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;

  constructor() {}

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

  onAddPost(): void {
    console.warn(this.postForm.value);
  }
}
