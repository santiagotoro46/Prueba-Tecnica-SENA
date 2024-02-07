import axios from "axios";
import { apiKey } from './apiKey'


export const getMovies = async () => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
        console.log(res.data.results);
        return res.data.results
    } catch (error) {
        console.error('Error while getting movies', error);
    }
}

export const getSeries = async() => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`);
    console.log(res.data.results);
    return res.data.results
    } catch (error) {
        console.error('Error while getting series', error);
    }
}