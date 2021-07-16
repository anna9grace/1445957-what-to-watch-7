import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import FilmTabReviews from './film-tab-reviews';

const reviewsData = [
  {
    comment: 'Unfortunately we dont have a reliable way to tell the true ratings of a movie.',
    date: '2021-06-13T16:51:35.253Z',
    id: 1,
    rating: 7.4,
    userId: 18,
    userName: 'Sophie',
  },
  {
    comment: 'Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.',
    date: '2021-06-19T16:51:35.253Z',
    id: 2,
    rating: 8.4,
    userId: 13,
    userName: 'Zak',
  },
];

describe('Component: FilmTabReviews', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabReviews
          reviews={reviewsData}
        />
      </Router>,
    );

    expect(screen.getByText(`${reviewsData[0].comment}`)).toBeInTheDocument();
    expect(screen.getByText(`${reviewsData[1].userName}`)).toBeInTheDocument();
  });
});
