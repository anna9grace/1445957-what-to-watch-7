import React, {useState} from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import filmProp from '../film-screen/film.prop';

function FilmList(props) {
  const {films} = props;
  const [activeCardId, setActiveCardId] = useState(null);

  return (
    <div className='catalog__films-list'>
      {
        films.map((film) => {
          const filmId = film.id;

          return (
            <FilmCard
              key={filmId}
              film={film}
              mouseEnterHandler={() => {
                setActiveCardId(filmId);
              }}
              mouseLeaveHandler={() => {
                setActiveCardId(null);
              }}
              isActive={film.id === activeCardId}
            />
          );
        })
      }
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmProp).isRequired,
};

export default FilmList;
