import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getProjectName } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  projectName$: Observable<string>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.projectName$ = this.store.select(getProjectName);
  }
}
