import React from 'react';
import PropTypes from 'prop-types';

import filmProp from '../film-screen/film.prop';
import FilmList from '../../ui/film-list/film-list';
import Logo from '../../ui/logo/logo';

function MyListScreen(props) {
  const {films} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {
          <FilmList films={films}/>
        }
      </section>

      <footer className="page-footer">
        <Logo isFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default MyListScreen;
