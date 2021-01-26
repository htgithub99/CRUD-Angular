import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, Inject } from '@angular/core';
import { ApisService } from 'src/app/service/apis.service';
import { map, switchMap } from 'rxjs/operators';
import { deleteProductSuccessed, DELETE_PRODUCT_REQUEST, fetchProductSuccessed, FETCH_PRODUCT_REQUEST } from './list.actions';

@Injectable()
export class ListEffects {
  fetchProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FETCH_PRODUCT_REQUEST),
      switchMap((action: any) => {
        return this.apis.gets(action.payload).pipe(
          map((result) => {
            return fetchProductSuccessed({ payload: result });
          })
        );
      })
    )
  );

  deleteProduct$ = createEffect(() =>
      this.actions$.pipe(
        ofType(DELETE_PRODUCT_REQUEST),
        switchMap((action: any) => {
          console.log('DeleteAction: ', action)
          return this.apis.deletes(action.payload.id).pipe(
            map(() => {
              return deleteProductSuccessed({ payload: action.payload})
            })
          )
        })
      )
  )

  constructor(private actions$: Actions, private apis: ApisService) {}
}
