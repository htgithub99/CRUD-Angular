import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, Inject } from '@angular/core';
import { ApisService } from 'src/app/service/apis.service';
import { map, switchMap,tap } from 'rxjs/operators';
import {
  createProductSuccessed,
  CREATE_PRODUCT_REQUEST,
} from './create.actions';
import { Router } from '@angular/router';

@Injectable()
export class CreateEffects {
  constructor(private actions$: Actions, private apis: ApisService, private router: Router) {}

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CREATE_PRODUCT_REQUEST),
      switchMap((action: any) => {
        return this.apis.creates(action.payload).pipe(
          map(() => {
            return createProductSuccessed({ payload: action.payload});
          }),
          tap(() => {
            this.router.navigate(['/', 'products']);
          })
        );
      })
    )
  );
}
