import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { app, IAppState } from './app.reducer';

export interface IReduxState {
  router: RouterState;
  app: IAppState;
}

export type GetState = () => IReduxState;

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    app,
  });