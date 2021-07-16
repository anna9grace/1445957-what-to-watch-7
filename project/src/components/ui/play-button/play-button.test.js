import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import PlayButton from './play-button';


describe('Component: PlayButton', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    const {getByText} = render(
      <Router history={history}>
        <PlayButton
          onPlay={() => {}}
        />
      </Router>,
    );

    expect(getByText('Play')).toBeInTheDocument();
  });
});
