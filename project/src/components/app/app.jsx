import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getFilm} from '../../utils/utils';
import PropTypes from 'prop-types';
import MainScreen from '../pages/main-screen/main-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import FilmScreen from '../pages/film-screen/film-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import filmProp from '../pages/film-screen/film.prop';
import reviewProp from '../ui/review/review.prop';

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
