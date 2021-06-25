import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import filmProp from '../../pages/film-screen/film.prop';
import FilmList from '../film-list/film-list';

function FilmListMain(props) {
  const {filteredFilms} = props;

  return (
    <FilmList
      films={filteredFilms}
    />
  );
}

FilmListMain.propTypes = {
  filteredFilms: PropTypes.arrayOf(filmProp).isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
});

export {FilmListMain};
export default connect(mapStateToProps, null)(FilmListMain);
