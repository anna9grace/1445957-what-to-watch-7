import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import { mockFilm, mockReviews } from '../../../utils/mock';
import FilmTabs from './film-tabs';

const filmData = mockFilm;

const reviewsData = mockReviews;


describe('Component: FilmTabs', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabs
          film={filmData}
          reviews={reviewsData}
        />
      </Router>,
    );

    expect(screen.getByTestId('film-tabs-list')).toBeInTheDocument();
    expect(screen.getByTestId('film-tabs')).toBeInTheDocument();
  });
});
