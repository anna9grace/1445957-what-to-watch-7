import React, { useState } from 'react';
import filmProp from '../film-screen/film.prop';
import { FilmTabsNames } from '../../const';
import FilmTabsList from './film-tabs-list';


const renderFilmTabs = (film, activeTab) => {
  switch(activeTab) {
    case FilmTabsNames.DETAILS:
      console.log(FilmTabsNames.DETAILS);
      break;

    case FilmTabsNames.REVIEWS:
      console.log(FilmTabsNames.REVIEWS);
      break;

    default:
      console.log(FilmTabsNames.OVERVIEW);
  }
};

function FilmTabs(props) {
  const [activeTab, setAtiveTab] = useState(FilmTabsNames.OVERVIEW);
  const {film}  = props;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">

        <FilmTabsList
          activeTab={activeTab}
          tabClickHandler={(tab) => {
            setAtiveTab(tab);
          }}
        />
      </nav>

      {renderFilmTabs(film, activeTab)}

    </div>
  );
}

FilmTabs.propTypes = {
  film: filmProp,
};

export default FilmTabs;
