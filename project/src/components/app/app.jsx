import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MainScreen from '../pages/main-screen/main-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
import FilmScreen from '../pages/film-screen/film-screen';
import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../pages/player-screen/player-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../pages/loading-screen/loading-screen';
import reviewProp from '../ui/review/review.prop';
import { AppRoute } from '../../const';

function App(props) {
  const { reviews } = props;

  const { isDataLoaded, isPromoDataLoaded } = props;

  if (!isDataLoaded || !isPromoDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen />
        </Route>

        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>

        <Route exact path={AppRoute.MY_LIST}>
          <MyListScreen />
        </Route>

        <Route
          exact path={`${AppRoute.FILM}/:id`}
          render={(data) => (
            <FilmScreen
              filmId={data.match.params.id}
              reviews={reviews}
            />)}
        />

        <Route
          exact path={`${AppRoute.FILM}/:id/review`}
          render={(data) => (
            <AddReviewScreen
              filmId={data.match.params.id}
            />)}
        />

        <Route
          exact path={`${AppRoute.PLAYER}/:id`}
          render={(data) => (
            <PlayerScreen
              filmId={data.match.params.id}
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
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isPromoDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  isPromoDataLoaded: state.isPromoDataLoaded,
});

export { App };
export default connect(mapStateToProps, null)(App);
