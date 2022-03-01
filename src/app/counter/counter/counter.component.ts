import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../app.state';
import { getProjectName } from '../state/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  projectName$: Observable<string>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.projectName$ = this.store.select(getProjectName);
  }
}
