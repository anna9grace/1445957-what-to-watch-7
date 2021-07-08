import React from 'react';
import {useSelector} from 'react-redux';

import FilmList from '../film-list/film-list';
import LoadMoreButton from '../load-more-botton/load-more-button';
import { getFilteredFilms, getFilmsCount } from '../../../store/main-data/selectors';

function FilmListMain() {
  const filteredFilms = useSelector(getFilteredFilms);
  const renderedFilmsCount = useSelector(getFilmsCount);

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

export default FilmListMain;
