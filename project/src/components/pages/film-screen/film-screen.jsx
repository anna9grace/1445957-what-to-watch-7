import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import FilmList from '../../ui/film-list/film-list';
import Logo from '../../ui/logo/logo';
import FilmTabs from '../../ui/film-tabs/film-tabs';
import UserBlock from '../../ui/user-block/user-block';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import { adaptFilmToClient, adaptFilmsToClient, adaptReviewsToClient } from '../../../services/adaptors';
import { AppRoutes, APIRoute, MAX_SIMILAR_FILMS_COUNT, AuthorizationStatus } from '../../../const';
import { fetchFilmInfo } from '../../../utils/api';

function FilmScreen(props) {
  const { filmId, authorizationStatus } = props;

  const history = useHistory();

  const [filmState, setFilmState] = useState({
    currentFilm: null,
    reviews: [],
    similarFilms: null,
    isDataLoaded: false,
  });
  const {currentFilm, reviews, similarFilms, isDataLoaded} = filmState;


  const getFilm = (data) => setFilmState((prevState) => (
    {
      ...prevState,
      currentFilm: adaptFilmToClient(data),
      isDataLoaded: true,
    }
  ));

  const getSimilarFilms = (data) => setFilmState((prevState) => (
    {
      ...prevState,
      similarFilms: adaptFilmsToClient(data)
        .filter((film) => film.id !== +filmId)
        .slice(0, MAX_SIMILAR_FILMS_COUNT),
    }
  ));

  const getReviews = (data) => setFilmState((prevState) => (
    {
      ...prevState,
      reviews: adaptReviewsToClient(data),
    }
  ));

  const redirectToNotFound = () => setFilmState((prevState) => (
    {
      ...prevState,
      isDataLoaded: true,
    }
  ));

  useEffect(() => {
    fetchFilmInfo(`${APIRoute.FILMS}/${filmId}`, getFilm, redirectToNotFound);
    fetchFilmInfo(`${APIRoute.REVIEWS}/${filmId}`, getReviews);
    fetchFilmInfo(`${APIRoute.FILMS}/${filmId}${APIRoute.SIMILAR_FILMS}`, getSimilarFilms);
  }, [filmId]);


  if (!isDataLoaded) {
    return <LoadingScreen />;
  }

  if (!currentFilm) {
    return <NotFoundScreen />;
  }

  const { name, posterImage, backgroundImage, genre, released} = currentFilm;

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo isLink/>

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`${AppRoutes.PLAYER}/${filmId}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.AUTH
                    && <Link className="btn film-card__button" to={`${AppRoutes.FILM}/${currentFilm.id}/review`}>Add review</Link>
                }

              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <FilmTabs
              film={currentFilm}
              reviews={reviews}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {similarFilms && <FilmList films={similarFilms} />}

        </section>

        <footer className="page-footer">

          <Logo isFooter isLink/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

FilmScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export { FilmScreen };
export default connect(mapStateToProps, null)(FilmScreen);
