import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, Inject } from '@angular/core';
import { ApisService } from 'src/app/service/apis.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { updateProductSuccessed, UPDATE_PRODUCT_REQUEST } from './edit.actions';
import { Router } from '@angular/router';

@Injectable()
export class UpdateEffects {
  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UPDATE_PRODUCT_REQUEST),
      switchMap((action: any) => {
        console.log('Update: ', action);
        return this.apis.updates(action.payload).pipe(
          map((result) => {
            return updateProductSuccessed({ payload: action.payload });
          }),
          tap(() => {
            this.router.navigate(['/', 'products']);
          })
        );
      })
    )
  )

  constructor(
    private actions$: Actions,
    private apis: ApisService,
    private router: Router
  ) {}
}
