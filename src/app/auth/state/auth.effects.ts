import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) =>
        this.authService
          .login(action.email, action.password)
          .pipe(map((data) => loginSuccess()))
      )
    )
  );
}
