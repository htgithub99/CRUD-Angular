import { Action, createReducer, on } from '@ngrx/store';
import * as _ from 'lodash';
import { deleteProductSuccessed, fetchProductSuccessed } from './list.actions';

export const productListFeatureKey = 'list';

export interface State {
  fetched: boolean;
  pagination: any;
  items: any[];
}

export const initialState: State = {
  fetched: false,
  pagination: {},
  items: [],
};

const _Reducer = createReducer(
  initialState,
  on(fetchProductSuccessed, (state, action: any) => {
    console.log('State: ', state);
    console.log('Action: ', action);
    return {
      ...state,
      fetched: true,
      items: action.payload.items,
      pagination: action.payload.pagination
    };
  }),

  on(deleteProductSuccessed, (state, action) => {
    const items = _.filter(
      state.items,
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      ...{ items },
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return _Reducer(state, action);
}
