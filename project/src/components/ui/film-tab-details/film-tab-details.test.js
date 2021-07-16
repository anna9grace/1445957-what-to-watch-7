import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

import FilmTabDetails from './film-tab-details';

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

describe('Component: FilmTabDetails', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <FilmTabDetails
          film={filmData}
        />
      </Router>,
    );

    expect(screen.getByText(`${filmData.director}`)).toBeInTheDocument();
    expect(screen.getByText(`${filmData.genre}`)).toBeInTheDocument();
  });
});
