import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../list/list.reducer';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { createProductRequest } from './create.actions';
import * as _ from 'lodash';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public createform: any;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.createform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      thumbnail: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      code: new FormControl('VOCVWJX8'),
      original_price: new FormControl('1823649'),
      product_type: new FormControl('products'),
      published_date: new FormControl(new Date()),
    });
  }

  onSubmit(createform: any) {
    if (createform.valid) {
      const data = _.cloneDeep(createform.value);
      this.store.dispatch(createProductRequest({ payload: data }));
    }
  }
}
