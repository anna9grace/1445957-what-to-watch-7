import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import MyListScreen from '../my-list-screen/my-list-screen';
import FilmScreen from '../film-screen/film-screen';
import AddReviewScreen from '../add-review-screen/add-review-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import filmProp from '../film-screen/film.prop';

function App(props) {
  const {promoFilm, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
            promoFilm={promoFilm}
            films={films}
          />
        </Route>

        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>

        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen
            films={films}
          />
        </Route>

        <Route exact path={AppRoute.FILM}>
          <FilmScreen
            film={films[0]}
            films={films}
          />
        </Route>

        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReviewScreen />
        </Route>

        <Route exact path={AppRoute.PLAYER}>
          <PlayerScreen
            film={films[0]}
          />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoFilm: PropTypes.shape({
    promoFilmName: PropTypes.string.isRequired,
    promoFilmGenre: PropTypes.string.isRequired,
    promoFilmReleaseYear: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default App;
