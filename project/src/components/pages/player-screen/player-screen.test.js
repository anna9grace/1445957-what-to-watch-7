import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { mockFilms } from '../../../utils/mock';
import PlayerScreen from './player-screen';

const initialState = {
  DATA: {
    films: mockFilms,
  },
};

const mockStore = configureStore({});

describe('Component: PlayerScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    history.push('/films/2/review');

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <PlayerScreen filmId='2'/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
    expect(screen.getByText(/Toggler/i)).toBeInTheDocument();
    expect(screen.getByTestId('player')).toBeInTheDocument();
  });
});
