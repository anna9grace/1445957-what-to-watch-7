import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import filmProp from '../film-screen/film.prop';
import FilmListMain from '../../ui/film-list-main/film-list-main';
import GenresList from '../../ui/genres-list/genres-list';
import UserBlock from '../../ui/user-block/user-block';
import Logo from '../../ui/logo/logo';
import {AppRoutes} from '../../../const';
import { resetActiveGenre, getFilmsList, resetFilmsRenderedCount } from '../../../store/action';


function MainScreen(props) {
  const {promoFilm, onPageLeave} = props;

  const history = useHistory();

  useEffect(() => onPageLeave);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={`${promoFilm.posterImage} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`${AppRoutes.PLAYER}/${promoFilm.id}`)}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList/>

          <FilmListMain/>

        </section>

        <footer className="page-footer">
          <Logo isFooter/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

MainScreen.propTypes = {
  promoFilm: filmProp,
  onPageLeave: PropTypes.func.isRequired,
};

const mapStateToProps = ({ADDITIONAL}) => ({
  promoFilm: ADDITIONAL.promoFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLeave() {
    dispatch(resetActiveGenre());
    dispatch(getFilmsList());
    dispatch(resetFilmsRenderedCount());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
