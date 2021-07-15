import { mainData } from './main-data';
import { INITIAL_GENRE, MAX_FILMS_COUNT } from '../../const';
import { ActionType } from '../action';

const initialState = {
  activeGenre: INITIAL_GENRE,
  films: [],
  filteredFilms: [],
  renderedFilmsCount: MAX_FILMS_COUNT,
  isDataLoaded: false,
  favoriteFilms: [],
  isFavoriteDataLoaded: false,
  promoFilm: {},
  isPromoDataLoaded: false,
};

const films = [
  {
    backgroundColor: '#D8D3BD',
    backgroundImage: 'https://7.react.pages.academy/static/film/background/Orlando.jpg',
    description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
    director: 'Sally Potter',
    genre: 'Action',
    id: 1,
    isFavorite: true,
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
  },
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

describe('Reducer: mainData', () => {
  it('without additional parameters should return initial state', () => {
    expect(mainData(undefined, {}))
      .toEqual(initialState);
  });


  it('should update state by load films', () => {
    const state = initialState;
    const loadFilmsAction = {
      type: ActionType.LOAD_FILMS,
      payload: films,
    };

    expect(mainData(state, loadFilmsAction))
      .toEqual({
        ...state,
        films: films,
        filteredFilms: films,
        isFavoriteDataLoaded: true,
        isDataLoaded: true,
      });
  });


  it('should update active genre by genre change', () => {
    const state = initialState;
    const changeActiveGenreAction = {
      type: ActionType.CHANGE_ACTIVE_GENRE,
      payload: 'Drama',
    };

    expect(mainData(state, changeActiveGenreAction))
      .toEqual({
        ...state,
        activeGenre: 'Drama',
      });
  });


  it('should change active genre to default value by genre reset', () => {
    const state = initialState;
    const resetActiveGenreAction = {
      type: ActionType.INITIAL_GENRE,
    };

    expect(mainData(state, resetActiveGenreAction))
      .toEqual({
        ...state,
        activeGenre: INITIAL_GENRE,
      });
  });


  it('should get films list filtered by active genre', () => {
    const state = {
      ...initialState,
      activeGenre: 'Action',
      films: films,
    };

    const getFilmsListAction = {
      type: ActionType.GET_FILMS_LIST,
    };

    expect(mainData(state, getFilmsListAction))
      .toEqual({
        ...state,
        filteredFilms: [films[0], films[2]],
      });
  });


  it('should get all films if "all genres" chosen', () => {
    const state = {
      ...initialState,
      activeGenre: INITIAL_GENRE,
      films: films,
    };

    const getFilmsListAction = {
      type: ActionType.GET_FILMS_LIST,
    };

    expect(mainData(state, getFilmsListAction))
      .toEqual({
        ...state,
        filteredFilms: films,
      });
  });


  it('should get current count of rendered films when all films shown', () => {
    const state = {
      ...initialState,
      filteredFilms: [films[0], films[2]],
    };

    const getFilmsRenderedCountAction = {
      type: ActionType.GET_FILMS_RENDERED_COUNT,
    };

    expect(mainData(state, getFilmsRenderedCountAction))
      .toEqual({
        ...state,
        renderedFilmsCount: 2,
      });
  });


  it('should get current count of rendered films when not all films shown', () => {
    const state = {
      ...initialState,
      renderedFilmsCount: 0,
      filteredFilms: [...films, ...films, ...films],
    };

    const getFilmsRenderedCountAction = {
      type: ActionType.GET_FILMS_RENDERED_COUNT,
    };

    expect(mainData(state, getFilmsRenderedCountAction))
      .toEqual({
        ...state,
        renderedFilmsCount: 8,
      });
  });


  it('should reset count of rendered films', () => {
    const state = {
      ...initialState,
      renderedFilmsCount: 7,
    };

    const resetFilmsCountAction = {
      type: ActionType.RESET_FILMS_RENDERED_COUNT,
    };

    expect(mainData(state, resetFilmsCountAction))
      .toEqual({
        ...state,
        renderedFilmsCount: MAX_FILMS_COUNT,
      });
  });


  it('should update favorite films by loading favorite films', () => {
    const state = initialState;

    const getFavoriteFilmsAction = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: films,
    };

    expect(mainData(state, getFavoriteFilmsAction))
      .toEqual({
        ...state,
        favoriteFilms: films,
        isFavoriteDataLoaded: true,
      });
  });


  it('should update promo film by loading promo film', () => {
    const state = initialState;

    const getPromoFilmAction = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: films[0],
    };

    expect(mainData(state, getPromoFilmAction))
      .toEqual({
        ...state,
        promoFilm: films[0],
        isPromoDataLoaded: true,
      });
  });


  it('should update promo film by adding or removing promo film from favorite', () => {
    const state = {
      ...initialState,
      promoFilm: films[0],
    };

    const updatePromoFilmAction = {
      type: ActionType.UPDATE_PROMO_FILM,
    };

    expect(mainData(state, updatePromoFilmAction))
      .toEqual({
        ...state,
        promoFilm: {
          ...state.promoFilm,
          isFavorite: true,
        },
      });
  });
});
