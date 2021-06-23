import { humanizeDuration } from '../utils/utils';

const films = [
  {
    'id': 1,
    'name': 'The Grand Budapest Hotel',
    'poster_image': 'img/the-grand-budapest-hotel-poster.jpg',
    'preview_image': 'img/dardjeeling-limited.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'preview_video_link': 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    'description': 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustaves friend and protege. Gustave prides himself on providing first-class service to the hotels guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustaves lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
    'rating': 8.9,
    'scores_count': 240,
    'director': 'Wes Andreson',
    'starring': ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe', 'Saoirse Ronan'],
    'run_time': 99,
    'genre': 'Comedy',
    'released': 2014,
    'is_favorite': false,
    'is_promo': true,
  },
  {
    'id': 2,
    'name': 'Bohemian Rhapsody',
    'poster_image': 'img/bohemian-rhapsody.jpg',
    'preview_image': 'img/bohemian-rhapsody.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985).',
    'rating': 7.9,
    'scores_count': 340,
    'director': 'Bryan Singer',
    'starring': ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    'run_time': 134,
    'genre': 'Music',
    'released': 2018,
    'is_favorite': false,
  },
  {
    'id': 3,
    'name': 'Snatch',
    'poster_image': 'img/snatch.jpg',
    'preview_image': 'img/snatch.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    'rating': 8.3,
    'scores_count': 280,
    'director': 'Guy Ritchie',
    'starring': ['Jason Statham', 'Brad Pitt', 'Stephen Graham'],
    'run_time': 104,
    'genre': 'Comedy',
    'released': 2000,
    'is_favorite': true,
  },
  {
    'id': 4,
    'name': 'Orlando',
    'poster_image': 'img/orlando.jpg',
    'preview_image': 'img/orlando.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'After Queen Elizabeth I commands him not to grow old, a young nobleman struggles with love and his place in the world.',
    'rating': 7.2,
    'scores_count': 195,
    'director': 'Sally Potter',
    'starring': ['Tilda Swinton', 'Billy Zane', 'Quentin Crisp'],
    'run_time': 92,
    'genre': 'Drama',
    'released': 1992,
    'is_favorite': false,
  },
  {
    'id': 5,
    'name': 'We Need to Talk About Kevin',
    'poster_image': 'img/we-need-to-talk-about-kevin.jpg',
    'preview_image': 'img/we-need-to-talk-about-kevin.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'Kevins mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    'rating': 7.5,
    'scores_count': 305,
    'director': 'Lynne Ramsay',
    'starring': ['Tilda Swinton', 'John C. Reilly', 'Ezra Miller'],
    'run_time': 114,
    'genre': 'Drama',
    'released': 2011,
    'is_favorite': true,
  },
  {
    'id': 6,
    'name': 'No Country for Old Men',
    'poster_image': 'img/no-country-for-old-men.jpg',
    'preview_image': 'img/no-country-for-old-men.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
    'rating': 8.1,
    'scores_count': 272,
    'director': 'Ethan Coen',
    'starring': ['Tommy Lee Jones', 'Javier Bardem', 'Josh Brolin'],
    'run_time': 122,
    'genre': 'Crime',
    'released': 2014,
    'is_favorite': true,
  },
  {
    'id': 7,
    'name': 'War of the Worlds',
    'poster_image': 'img/war-of-the-worlds.jpg',
    'preview_image': 'img/war-of-the-worlds.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'An updated version of H.G Wells seminal sci-fi classic about an alien invasion threatening the future of humanity. The catastrophic nightmare is depicted through the eyes of one American family fighting for survival.',
    'rating': 6.5,
    'scores_count': 290,
    'director': 'Steven Spielberg',
    'starring': ['Tom Cruise', 'Dakota Fanning', 'Tim Robbins'],
    'run_time': 116,
    'genre': 'Sci-Fi',
    'released': 2005,
    'is_favorite': true,
  },
  {
    'id': 8,
    'name': 'Pulp Fiction',
    'poster_image': 'img/pulp-fiction.jpg',
    'preview_image': 'img/pulp-fiction.jpg',
    'background_image': 'img/bg-the-grand-budapest-hotel.jpg',
    'background_color': '#ffffff',
    'video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'preview_video_link': 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    'description': 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    'rating': 8.9,
    'scores_count': 350,
    'director': 'Quentin Tarantino',
    'starring': ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    'run_time': 154,
    'genre': 'Comedy',
    'released': 1994,
    'is_favorite': false,
  },
];

const adaptToClient = (film) => (
  {
    id: film.id,
    name: film.name,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
    description: film.description,
    rating: film.rating,
    scoresCount: film.scores_count,
    director: film.director,
    starring: film.starring,
    runTime: humanizeDuration(film.run_time),
    genre: film.genre,
    released: film.released,
    isFavorite: film.is_favorite,
    isPromo: film.is_promo,
  }
);


export default films.map((film) => adaptToClient(film));
