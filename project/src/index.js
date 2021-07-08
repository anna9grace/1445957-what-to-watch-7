import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import { reducer } from './store/reducer';
import {createAPI} from './services/api';
import {fetchFilmsList, fetchPromoFilm, chekAuth} from './store/api-actions';
import { AuthorizationStatus } from './const';
import { requireAuthorization } from './store/action';

export const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(chekAuth(true));
store.dispatch(fetchFilmsList());
store.dispatch(fetchPromoFilm());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
