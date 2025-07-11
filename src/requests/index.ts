import { API_KEY } from '../constants'
import { RequestsDTO } from '../dto'

const TRENDING_ALL_WEEK = '/trending/all/week';
const DISCOVER_MOVIE = '/discover/movie';
const DISCOVER_TV = '/discover/tv';
const MOVIE_TOP_RATED = '/movie/top_rated';
const MOVIE_NOW_PLAYING = '/movie/now_playing';
const MOVIE_UPCOMING = '/movie/upcoming';
const MOVIE_LATEST = '/movie/latest';
const DISCOVER_MOVIE_CERTIFICATION_COUNTRY = 'US';

const getDiscoverQueryString = (content: string, genreId?: number): string => {
  if (content === 'movie') {
    return `/discover/${content}?api_key=${API_KEY}&with_genres=${genreId}`
  } else if (content === 'netflix') {
    return `${DISCOVER_TV}?api_key=${API_KEY}&with_networks=123`
  }
  return '';
}

const requests: RequestsDTO = {
  fetchTrending: `${TRENDING_ALL_WEEK}?api_key=${API_KEY}&language=en-US&include_video=true`,
  fetchNetflixOriginals: getDiscoverQueryString('netflix'),
  fetchActionMovies: getDiscoverQueryString('movie', 28),
  fetchComedyMovies: getDiscoverQueryString('movie', 35),
  fetchHorrorMovies: getDiscoverQueryString('movie', 27),
  fetchRomanceMovies: getDiscoverQueryString('movie', 10749),
  fetchDocumentaries: getDiscoverQueryString('movie', 99),
  fetchFamilyMovies: getDiscoverQueryString('movie', 10751),
  fetchTopRated: `${MOVIE_TOP_RATED}?api_key=${API_KEY}&language=en-US`,
  fetchInTheatres: `${MOVIE_NOW_PLAYING}?api_key=${API_KEY}&language=en-US&page=1&region=IN`,
  fetchUpcoming: `${MOVIE_UPCOMING}?api_key=${API_KEY}&language=en-US&page=1&region=IN`,
  fetchLatest: `${MOVIE_LATEST}?api_key=${API_KEY}&language=en-US&page=1&region=IN`,
  fetchKidsMovies: `${DISCOVER_MOVIE}?api_key=${API_KEY}&${DISCOVER_MOVIE_CERTIFICATION_COUNTRY}=US&certification.lte=G&sort_by=popularity.asc`
};

export default requests;
