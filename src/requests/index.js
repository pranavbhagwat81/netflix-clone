import { API_KEY } from '../constants'


const getDiscoverQueryString = (content, genreId) => {
  if (content === 'movie') {
    return `/discover/${content}?api_key=${API_KEY}&with_genres=${genreId}`
  } else if (content === 'netflix') {
    return `/discover/tv?api_key=${API_KEY}&with_networks=123`
  }
}

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&include_video=true`,
  fetchNetflixOriginals: getDiscoverQueryString('netflix'),
  fetchActionMovies: getDiscoverQueryString('movie', 28),
  fetchComedyMovies: getDiscoverQueryString('movie', 35),
  fetchHorrorMovies: getDiscoverQueryString('movie', 27),
  fetchRomanceMovies: getDiscoverQueryString('movie', 10749),
  fetchDocumentaries: getDiscoverQueryString('movie', 99),
  fetchFamilyMovies: getDiscoverQueryString('movie', 10751),
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchInTheatres: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=IN`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=IN`,
  fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US&page=1&region=IN`
};

export default requests;
