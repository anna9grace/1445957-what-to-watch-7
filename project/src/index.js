import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {configureStore} from '@reduxjs/toolkit';

import App from './components/app/app';
import rootReducer from './store/root-reducer';
import {createAPI} from './services/api';
import {fetchFilmsList, fetchPromoFilm, chekAuth} from './store/api-actions';
import { AuthorizationStatus } from './const';
import { requireAuthorization } from './store/action';

export const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

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
