import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films';
import comments from './mocks/reviews';

const data = {
  promoFilm: {
    promoFilmName: 'The Grand Budapest Hotel',
    promoFilmGenre: 'Drama',
    promoFilmReleaseYear: 2014,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={data.promoFilm}
      films={films}
      comments={comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
