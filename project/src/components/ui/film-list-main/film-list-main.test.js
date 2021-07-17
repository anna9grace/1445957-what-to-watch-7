import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import FilmListMain from './film-list-main';

import { MAX_FILMS_COUNT } from '../../../const';


const initialState = {
  DATA: {
    filteredFilms: [
      {
        backgroundColor: '#C6CADF',
        backgroundImage: 'https://7.react.pages.academy/static/film/background/Seven_Years_in_Tibet.jpg',
        description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of Chinas takeover of Tibet.',
        director: 'Jean-Jacques Annaud',
        genre: 'Adventure',
        id: 2,
        isFavorite: false,
        name: 'Seven Years in Tibet',
        posterImage: 'https://7.react.pages.academy/static/film/poster/Seven_Years_in_Tibet.jpg',
        previewImage: 'https://7.react.pages.academy/static/film/preview/seven-years-in-tibet.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        rating: 3.6,
        released: 1997,
        runTime: 136,
        scoresCount: 112612,
        starring: ['Brad Pitt', 'David Thewlis', 'BD Wong'],
        videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
      },
      {
        backgroundColor: '#73B39A',
        backgroundImage: 'https://7.react.pages.academy/static/film/background/bronson.jpg',
        description: 'A young man who was sentenced to seven years in prison for robbing a post office ends up spending three decades in solitary confinement. During this time, his own personality is supplanted by his alter-ego, Charles Bronson.',
        director: 'Nicolas Winding Refn',
        genre: 'Action',
        id: 3,
        isFavorite: false,
        name: 'Bronson',
        posterImage: 'https://7.react.pages.academy/static/film/poster/bronson.jpg',
        previewImage: 'https://7.react.pages.academy/static/film/preview/bronson.jpg',
        previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
        rating: 3.6,
        released: 2008,
        runTime: 92,
        scoresCount: 109661,
        starring: ['Tom Hardy', 'Kelly Adams', 'Luing Andrews'],
        videoLink: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
      },
    ],
    renderedFilmsCount: MAX_FILMS_COUNT,
  },
};

const mockStore = configureStore({});

describe('Component: FilmListMain', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={mockStore(initialState)}>
        <Router history={history}>
          <FilmListMain />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('films-list')).toBeInTheDocument();
  });
});
