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
import reviewProp from '../review/review.prop';
import {getFilm} from '../../utils/utils';

function App(props) {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen
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

        <Route
          exact path={`${AppRoute.FILM}/:id`}
          render={(data) => (
            <FilmScreen
              film={getFilm(films, data.match.params.id)}
              films={films}
              reviews={reviews}
            />)}
        />

        <Route
          exact path={`${AppRoute.FILM}/:id/review`}
          render={(data) => (
            <AddReviewScreen
              film={getFilm(films, data.match.params.id)}
            />)}
        />

        <Route
          exact path={`${AppRoute.PLAYER}/:id`}
          render={(data) => (
            <PlayerScreen
              film={getFilm(films, data.match.params.id)}
            />
          )}
        />

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
