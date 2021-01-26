import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { VicodersNgModal } from '@vicoders/ng-modal';
import * as _ from 'lodash';
import { productCreateRouter } from '../product.const';
import { deleteProductRequest, fetchProductRequest } from './list.actions';
import { State } from './list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public products: any
  public productCreateRouter: Function = productCreateRouter;
  constructor(private store: Store<State>, private modal: VicodersNgModal ) {
    this.store.dispatch(
      fetchProductRequest({
        payload: {}
      })
    );
   }

  ngOnInit(): void {
    this.store.pipe(select((state: any) => state.product.list)).subscribe(({ items }) => {
      this.products = _.map(items, (i) => {
        return i
      })
    });
  }

  deleteproduct(id: number) {
    console.log('id: ', id)
    this.modal.confirm('Do you want to delete this product', { title: 'Delete' }).result.then(
      (result) => {
        this.store.dispatch(deleteProductRequest({ payload: id }))
      },
      (dimiss) => {}
    );
  }

}
