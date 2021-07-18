import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { mockFilm } from '../../../utils/mock';
import MyListButton from './my-list-button';

const initialState = {
  DATA: {
    promoFilm: mockFilm,
  },
  FILM: {
    currentFilm: mockFilm,
  },
};


const mockStore = configureStore({});

describe('Component: MyListButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <MyListButton filmId='2' />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });
});
