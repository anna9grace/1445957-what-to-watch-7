import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import filmProp from '../../pages/film-screen/film.prop';
import FilmList from '../film-list/film-list';
import LoadMoreButton from '../load-more-botton/load-more-button';

function FilmListMain(props) {
  const {filteredFilms, renderedFilmsCount} = props;
  const filmsToShow = filteredFilms.slice(0, Math.min(filteredFilms.length, renderedFilmsCount));

  return (
    <React.Fragment>
      <FilmList
        films={filmsToShow}
      />

      {filteredFilms.length > renderedFilmsCount && <LoadMoreButton />}
    </React.Fragment>
  );
}

FilmListMain.propTypes = {
  filteredFilms: PropTypes.arrayOf(filmProp).isRequired,
  renderedFilmsCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  filteredFilms: state.filteredFilms,
  renderedFilmsCount: state.renderedFilmsCount,
});

export {FilmListMain};
export default connect(mapStateToProps, null)(FilmListMain);
