import { createAction, props } from '@ngrx/store';

export const UPDATE_PRODUCT_REQUEST = '[Update Product Request]'
export const UPDATE_PRODUCT_SUCCESSED = '[Update Product Successed] update product successed'

export const updateProductRequest = createAction(UPDATE_PRODUCT_REQUEST, props<{ payload: any }>())
export const updateProductSuccessed = createAction(UPDATE_PRODUCT_SUCCESSED, props<{ payload: any }>())
