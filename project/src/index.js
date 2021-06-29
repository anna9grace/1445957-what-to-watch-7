import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
// import films from './mocks/films';
import reviews from './mocks/reviews';
import { reducer } from './store/reducer';
import {createAPI} from './services/api';
import {fetchFilmsList} from './store/api-actions';

const api = createAPI(
  // () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    // applyMiddleware(redirect),
  ),
);

store.dispatch(fetchFilmsList());

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        // films={films}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
