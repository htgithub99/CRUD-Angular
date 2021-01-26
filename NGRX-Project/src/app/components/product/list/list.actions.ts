import { createAction, props } from '@ngrx/store';

export const FETCH_PRODUCT_REQUEST = '[Fetch Product Request]'
export const FETCH_PRODUCT_SUCCESSED = '[Fetch Product Successed] fetch product successed'
export const DELETE_PRODUCT_REQUEST = '[Delete Product Request]'
export const DELETE_PRODUCT_SUCCESSED = '[Delete Product Successed] delete product successed'

export const fetchProductRequest = createAction(FETCH_PRODUCT_REQUEST, props<{ payload: any }> ())
export const fetchProductSuccessed = createAction(FETCH_PRODUCT_SUCCESSED, props<{ payload: any }>())
export const deleteProductRequest = createAction(DELETE_PRODUCT_REQUEST, props<{ payload: any }>())
export const deleteProductSuccessed = createAction(DELETE_PRODUCT_SUCCESSED, props<{ payload: any }>())
