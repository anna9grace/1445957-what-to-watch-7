import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import FilmScreen from './film-screen';
import { mockFilm, mockFilms, mockReviews } from '../../../utils/mock';
import { AuthorizationStatus } from '../../../const';

const initialState = {
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {
      'id': 1,
      'email': 'Oliver.conner@gmail.com',
      'name': 'Oliver.conner',
      'avatar_url': 'img/1.png',
      'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
    },
  },
  FILM: {
    currentFilm: mockFilm,
    reviews: mockReviews,
    similarFilms: mockFilms,
    isFilmDataLoaded: true,
  },
  DATA: {
    promoFilm: mockFilm,
  },
};

const mockStore = configureStore({});

describe('Component: FilmScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/films/2');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <FilmScreen filmId='2'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/More like this/i)).toBeInTheDocument();
    expect(screen.getByText(/My list/i)).toBeInTheDocument();
    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByTestId('film-tabs-block')).toBeInTheDocument();
    expect(screen.getByTestId('films-list')).toBeInTheDocument();
  });
});
