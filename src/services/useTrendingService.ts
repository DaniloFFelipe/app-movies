import { useQuery } from "react-query";
import { API_KEY, BASE_URL } from "./api";
import { IMovie } from "./types";

const imgMoviePath = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

export const useTrendingServiceQuery = () =>
  useQuery(`repoData`, async () => {
    const resp = await fetch(
      `${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`,
    );
    const data = await resp.json();

    return data.results as IMovie[];
  });

export function getMovieImg(file: string) {
  return `${imgMoviePath}/${file}`;
}
