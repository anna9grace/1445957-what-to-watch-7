import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const data = {
  promoFilm: {
    promoFilmName: 'The Grand Budapest Hotel',
    promoFilmGenre: 'Drama',
    promoFilmReleaseYear: 2014,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App promoFilm={data.promoFilm}/>
  </React.StrictMode>,
  document.getElementById('root'));
