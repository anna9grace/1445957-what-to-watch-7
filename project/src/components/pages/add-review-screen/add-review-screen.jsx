import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import filmProp from '../film-screen/film.prop';
import Logo from '../../ui/logo/logo';
import AddReviewForm from '../../ui/add-review-form/add-review-form';
import { AppRoute } from '../../../const';

function AddReviewScreen(props) {
  const { filmId, films } = props;
  const film = films.find((filmTtem) => filmTtem.id === +filmId);
  const { name, backgroundImage, posterImage } = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={`${AppRoute.FILM}/${film.id}`}>{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
}

AddReviewScreen.propTypes = {
  filmId: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmProp).isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export { AddReviewScreen };
export default connect(mapStateToProps, null)(AddReviewScreen);
