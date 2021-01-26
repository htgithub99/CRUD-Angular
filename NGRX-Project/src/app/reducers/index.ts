import { ActionReducerMap, MetaReducer, ActionReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';

export function logger(reducer: ActionReducer<{}>): any {
  return storeLogger()(reducer);
}

export const reducers: ActionReducerMap<{}> = {};

export const metaReducers: MetaReducer<{}>[] = !environment.production ? [logger] : [];

/** Khi set up ngrx-store-looger không cần setup file này cũng Ok(Đã test thử) */
