import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import reviews from './mocks/reviews';
import { reducer } from './store/reducer';
import {createAPI} from './services/api';
import {fetchFilmsList, fetchPromoFilm, chekAuth} from './store/api-actions';
import { AuthorizationStatus } from './const';
import { ActionCreator } from './store/action';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
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
      <App
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
