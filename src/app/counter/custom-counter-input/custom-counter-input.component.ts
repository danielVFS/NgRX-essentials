import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeProjectName, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  projectName: string;
  value: number;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      console.log('project name observable called');
      this.projectName = data.projectName;
    });
  }

  onAdd(): void {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeProjectName(): void {
    this.store.dispatch(changeProjectName());
  }
}
