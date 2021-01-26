import { createAction, props } from '@ngrx/store';

export const CREATE_PRODUCT_REQUEST = '[Create Product Request]'
export const CREATE_PRODUCT_SUCCESSED = '[Create Product Successed] create product successed'

export const createProductRequest = createAction(CREATE_PRODUCT_REQUEST, props<{ payload: any }>())
export const createProductSuccessed = createAction(CREATE_PRODUCT_SUCCESSED, props<{ payload: any }>())
