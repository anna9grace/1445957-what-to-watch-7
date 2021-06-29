import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import MainScreen from '../pages/main-screen/main-screen';
import SignInScreen from '../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../pages/my-list-screen/my-list-screen';
// import FilmScreen from '../pages/film-screen/film-screen';
// import AddReviewScreen from '../pages/add-review-screen/add-review-screen';
// import PlayerScreen from '../pages/player-screen/player-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import LoadingScreen from '../pages/loading-screen/loading-screen';
// import reviewProp from '../ui/review/review.prop';
// import {getFilm} from '../../utils/utils';
import {AppRoute} from '../../const';

function App(props) {
  // const {reviews} = props;

  const {isDataLoaded} = props;

  if (!isDataLoaded) {
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
          {(!isDataLoaded && <LoadingScreen />) || <MyListScreen />}
        </Route>

        {/* <Route
          exact path={`${AppRoute.FILM}/:id`}
          render={(data) => (
            <FilmScreen
              // film={getFilm(films, data.match.params.id)}
              // films={films}
              reviews={reviews}
            />)}
        /> */}

        {/* <Route
          exact path={`${AppRoute.FILM}/:id/review`}
          render={(data) => (
            <AddReviewScreen
              // film={getFilm(films, data.match.params.id)}
            />)}
        /> */}

        {/* <Route
          exact path={`${AppRoute.PLAYER}/:id`}
          render={(data) => (
            <PlayerScreen
              // film={getFilm(films, data.match.params.id)}
            />
          )}
        /> */}

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  // reviews: PropTypes.arrayOf(reviewProp).isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
