import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../list/list.reducer';
import { ApisService } from '../../../service/apis.service';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { updateProductRequest } from './edit.actions';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  public updateform: any;
  public idEdit;
  constructor(
    private store: Store<State>,
    public activatedRoute: ActivatedRoute,
    private apis: ApisService
  ) {
    this.idEdit = activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.apis.getByid(this.idEdit).subscribe((Response) => {
      this.initForm(Response);
    });
  }

  initForm(datas: any) {
    this.updateform = new FormGroup({
      id: new FormControl(datas.id, [Validators.required]),
      name: new FormControl(datas.name, [Validators.required]),
      price: new FormControl(datas.price, [Validators.required]),
      thumbnail: new FormControl(datas.thumbnail, [Validators.required]),
      description: new FormControl(datas.description, [Validators.required]),
      code: new FormControl('VOCVWJX8'),
      original_price: new FormControl('1823649'),
      product_type: new FormControl('products'),
      published_date: new FormControl(new Date()),
    });
  }

  onSubmit(updateform: any) {
    if (updateform.valid) {
      const data = _.cloneDeep(updateform.value);
      this.store.dispatch(updateProductRequest({ payload: data }));
    }
  }
}
