import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { mockFilms } from '../../../utils/mock';
import GenresList from './genres-list';
import { INITIAL_GENRE } from '../../../const';


const initialState = {
  DATA: {
    films: mockFilms,
    activeGenre: INITIAL_GENRE,
  },
};

const mockStore = configureStore({});


describe('Component: GenresList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <GenresList />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(`${INITIAL_GENRE}`)).toBeInTheDocument();
    expect(screen.getByText(`${initialState.DATA.films[0].genre}`)).toBeInTheDocument();
  });
});
