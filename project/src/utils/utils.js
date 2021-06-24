import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const getFilm = (films, id) => films.find((film) => +film.id === (+id));

export const getSimilarFilms = (films, currentFilm) => (
  films
    .filter((filmItem) => filmItem.genre === currentFilm.genre && filmItem.name !== currentFilm.name)
);

export const humanizeDuration = (minutes) => {
  const durationData = dayjs.duration(minutes, 'minutes');
  const durationInHours = durationData.get('hours') !== 0 ? `${durationData.get('hours')}h` : '';
  return `${durationInHours} ${durationData.get('minutes')}m`;
};

export const humanizeDate = (date, format) => dayjs(date).format(format);

export const transformRating = (rating) => {
  const changedRating = rating.toString().split('');
  const dotIndex = changedRating.findIndex((el) => el === '.');
  if (dotIndex !== -1) {
    changedRating[dotIndex] = ',';
  } else {
    changedRating.push(',', '0');
  }
  return changedRating.join('');
};

export const makeItemsUnique = (items) => [...new Set(items)];
