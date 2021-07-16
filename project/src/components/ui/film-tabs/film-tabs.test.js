import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import FilmTabs from './film-tabs';

const filmData = {
  backgroundColor: '#D8D3BD',
  backgroundImage: 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
  description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
  director: 'Sally Potter',
  genre: 'Action',
  id: 1,
  isFavorite: false,
  name: 'Orlando',
  posterImage: 'https://7.react.pages.academy/static/film/poster/Orlando.jpg',
  previewImage: 'https://7.react.pages.academy/static/film/preview/orlando.jpg',
  previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
  rating: 2.6,
  released: 1992,
  runTime: 94,
  scoresCount: 12292,
  starring: ['Tilda Swinton', 'Billy Zane', 'Quentin Crisp'],
  videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
};

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
