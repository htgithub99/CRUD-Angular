import { Action, ActionReducerMap, combineReducers } from '@ngrx/store';
import * as list from './list/list.reducer';

export const productFeatureKey = 'product';

export interface State {
  [list.productListFeatureKey]: list.State;
}

const _reducer: ActionReducerMap<State> = {
  [list.productListFeatureKey]: list.reducer,
};

export const initialState = {
  [list.productListFeatureKey]: list.initialState,
};

const metaReducer = combineReducers(_reducer, initialState);

export function reducer(state: State | undefined, action: Action) {
  return metaReducer(state, action);
}
