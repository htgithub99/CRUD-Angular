import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../../environments/environment';
// import * as menu_items from './menu_items';
import * as product from '../../components/product/product.reducer';



export function logger(reducer: ActionReducer<{}>): any {
  return storeLogger()(reducer);
}

export interface State {
  // [menu_items.key]: menu_items.State;
  [product.productFeatureKey]: product.State;
}

export const reducers: ActionReducerMap<State> = {
  // [menu_items.key]: menu_items.reducer,
  [product.productFeatureKey]: product.reducer,

};

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [logger] : [];
