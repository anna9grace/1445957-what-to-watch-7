import { humanizeDuration } from '../utils/utils';

export const adaptFilmToClient = (filmData) => (
  {
    id: filmData.id,
    name: filmData.name,
    posterImage: filmData.poster_image,
    previewImage: filmData.preview_image,
    backgroundImage: filmData.background_image,
    backgroundColor: filmData.background_color,
    videoLink: filmData.video_link,
    previewVideoLink: filmData.preview_video_link,
    description: filmData.description,
    rating: filmData.rating,
    scoresCount: filmData.scores_count,
    director: filmData.director,
    starring: filmData.starring,
    runTime: humanizeDuration(filmData.run_time),
    genre: filmData.genre,
    released: filmData.released,
    isFavorite: filmData.is_favorite,
  }
);

export const adaptFilmsToClient = (filmsData) => {
  const adaptedFilms = filmsData.map((film) => adaptFilmToClient(film));
  return adaptedFilms;
};
// export default films.map((film) => adaptToClient(film));
