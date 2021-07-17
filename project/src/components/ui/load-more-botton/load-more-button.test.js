import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import LoadMoreButton from './load-more-button';

const initialState = {};
const mockStore = configureStore({});

describe('Component: LoadMoreButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <LoadMoreButton />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
});
