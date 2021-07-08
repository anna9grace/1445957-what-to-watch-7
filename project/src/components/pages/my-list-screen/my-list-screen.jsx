import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import filmProp from '../film-screen/film.prop';
import FilmList from '../../ui/film-list/film-list';
import Logo from '../../ui/logo/logo';
import UserBlock from '../../ui/user-block/user-block';
import { getFavoriteFilms } from '../../../store/additional-data/selectors';

function MyListScreen(props) {
  const {favoriteFilms} = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isLink />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favoriteFilms}/>

      </section>

      <footer className="page-footer">
        <Logo isFooter isLink />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

MyListScreen.propTypes = {
  favoriteFilms: PropTypes.arrayOf(filmProp).isRequired,
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
});

export {MyListScreen};
export default connect(mapStateToProps, null)(MyListScreen);
