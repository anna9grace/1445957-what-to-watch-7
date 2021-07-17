import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import Review from './review';

const reviewData = {
  comment: 'Unfortunately we dont have a reliable way to tell the true ratings of a movie.',
  date: '2021-06-13T16:51:35.253Z',
  id: 1,
  rating: 7.4,
  userId: 18,
  userName: 'Sophie',
};


describe('Component: Review', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <Review
          review={reviewData}
        />
      </Router>,
    );

    expect(getByText(`${reviewData.comment}`)).toBeInTheDocument();
    expect(getByText(`${reviewData.userName}`)).toBeInTheDocument();
  });
});
