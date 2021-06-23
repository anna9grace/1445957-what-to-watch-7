import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';

import filmProp from './film.prop';
import reviewProp from '../../ui/review/review.prop';
import FilmList from '../../ui/film-list/film-list';
import Logo from '../../ui/logo/logo';
import FilmTabs from '../../ui/film-tabs/film-tabs';
import {AppRoute, MAX_SIMILAR_FILMS_COUNT} from '../../../const';
import { getSimilarFilms } from '../../../utils/utils';

function FilmScreen(props) {
  const {film, films, reviews} = props;
  const {name, posterImage, backgroundImage, genre, released, id} = film;

  const history = useHistory();

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <Link to={AppRoute.MY_LIST}>
                    <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                  </Link>
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
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
                  onClick={() => history.push(`${AppRoute.PLAYER}/${id}`)}
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
                <Link className="btn film-card__button" to={`${AppRoute.FILM}/${film.id}/review`}>Add review</Link>
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
              film={film}
              reviews={reviews}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {
            <FilmList films={getSimilarFilms(films, film).slice(0, MAX_SIMILAR_FILMS_COUNT)}/>
          }
        </section>

        <footer className="page-footer">
          <Logo isFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

FilmScreen.propTypes = {
  film: filmProp,
  films: PropTypes.arrayOf(filmProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default FilmScreen;
