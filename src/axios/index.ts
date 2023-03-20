import axios from 'axios'
import { MOVIE_DB_BASE_URL } from '../constants'


//base url to make requests to the movie databse.
const instance = axios.create({
    baseURL: MOVIE_DB_BASE_URL,
});

export default instance