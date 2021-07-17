import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import UserBlock from './user-block';

import { AuthorizationStatus } from '../../../const';

const mockStore = configureStore({});


describe('Component: UserBlock', () => {
  it('should render correctly if user is authorized', () => {
    const history = createMemoryHistory();

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
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
    expect(screen.getByAltText('User avatar')).toBeInTheDocument();
  });


  it('should render correctly if user is not authorized', () => {
    const history = createMemoryHistory();

    const initialState = {
      USER: {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      },
    };

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <UserBlock />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
