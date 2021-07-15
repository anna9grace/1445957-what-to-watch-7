import { filmData } from './film-data';

import { ActionType } from '../action';


const initialState = {
  currentFilm: null,
  reviews: [],
  similarFilms: null,
  isFilmDataLoaded: false,
  isCommentSending: false,
};

const film = {
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


const films = [
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
  {
    backgroundColor: '#B6A99F',
    backgroundImage: 'https://7.react.pages.academy/static/film/background/Fantastic_Beasts.jpg',
    description: 'In an effort to thwart Grindelwalds plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though hes unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
    director: 'David Yates',
    genre: 'Fantasy',
    id: 4,
    isFavorite: false,
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'https://7.react.pages.academy/static/film/poster/Fantastic_Beasts.jpg',
    previewImage: 'https://7.react.pages.academy/static/film/preview/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    rating: 3.4,
    released: 2018,
    runTime: 134,
    scoresCount: 160757,
    starring: ['Eddie Redmayne', 'Katherine Waterston', 'Dan Fogler'],
    videoLink: 'http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4',
  },
];

const comments = [
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

describe('Reducer: mainData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmData(undefined, {}))
      .toEqual(initialState);
  });


  it('should update current film by film load', () => {
    const state = initialState;
    const loadFilmAction = {
      type: ActionType.LOAD_FILM,
      payload: film,
    };

    expect(filmData(state, loadFilmAction))
      .toEqual({
        ...state,
        currentFilm: film,
        isFilmDataLoaded: true,
      });
  });


  it('should update current film by adding / removing it from favorites', () => {
    const state = {
      ...initialState,
      currentFilm: film,
    };

    const updateFilmAction = {
      type: ActionType.UPDATE_FILM,
    };

    expect(filmData(state, updateFilmAction))
      .toEqual({
        ...state,
        currentFilm: {
          ...state.currentFilm,
          isFavorite: true,
        },
      });
  });


  it('should update state by clearing film data', () => {
    const state = {
      ...initialState,
      currentFilm: film,
      similarFilms: films,
      isFilmDataLoaded: true,
      reviews: comments,
    };
    const clearFilmAction = {
      type: ActionType.CLEAR_FILM,
    };

    expect(filmData(state, clearFilmAction))
      .toEqual({
        ...state,
        currentFilm: null,
        similarFilms: null,
        isFilmDataLoaded: false,
        reviews: [],
      });
  });


  it('should update similar films by similar films load', () => {
    const state = initialState;
    const loadSimilarFilmsAction = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: films,
    };

    expect(filmData(state, loadSimilarFilmsAction))
      .toEqual({
        ...state,
        similarFilms: films,
      });
  });


  it('should update reviews films by reviews load', () => {
    const state = initialState;
    const loadReviewsAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: comments,
    };

    expect(filmData(state, loadReviewsAction))
      .toEqual({
        ...state,
        reviews: comments,
      });
  });


  it('should mark data as loaded by film data load', () => {
    const state = initialState;
    const setIsLoadedAction = {
      type: ActionType.SET_IS_LOADED,
    };

    expect(filmData(state, setIsLoadedAction))
      .toEqual({
        ...state,
        isFilmDataLoaded: true,
      });
  });


  it('should mark comment as sending when sending process started', () => {
    const state = initialState;
    const setIsSendingAction = {
      type: ActionType.SET_IS_SENDING,
      payload: true,
    };

    expect(filmData(state, setIsSendingAction))
      .toEqual({
        ...state,
        isCommentSending: true,
      });
  });
});
