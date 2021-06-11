import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';

function App(props) {
  const {promoFilm} = props;

  return (
    // <MainScreen promoFilm={promoFilm} />
    // <SignInScreen/>
    // <MyListScreen />
    // <FilmScreen />
    // <AddReviewScreen />
    <PlayerScreen />
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
