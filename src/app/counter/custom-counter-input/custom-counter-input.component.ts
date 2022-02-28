import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { changeProjectName, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onAdd(): void {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeProjectName(): void {
    this.store.dispatch(changeProjectName());
  }
}
