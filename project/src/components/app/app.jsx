import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';

function App(props) {
  const {promoFilm} = props;

  return (
    <MainScreen promoFilm={promoFilm} />
  );
}

App.propTypes = {
  promoFilm: PropTypes.shape({
    promoFilmName: PropTypes.string.isRequired,
    promoFilmGenre: PropTypes.string.isRequired,
    promoFilmReleaseYear: PropTypes.number.isRequired,
  }).isRequired,
};

export default App;
