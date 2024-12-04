import axios from "axios";
import type { Movie, MovieDetail } from "@/types";
import Constants from "expo-constants";
const BASE_URL = Constants.expoConfig?.extra?.apiUrl;

export const searchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}s=${encodeURIComponent(query)}`);
  return response.data?.Search;
};

export const getMoviesByID = async (id: string): Promise<MovieDetail> => {
  const response = await axios.get(`${BASE_URL}i=${id}`);
  return response.data;
};
