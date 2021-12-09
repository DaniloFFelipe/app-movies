import { useQuery } from "react-query";
import api from "../api";
import { IMovie, ITrends } from "../types";

const imgMoviePath = `https://www.themoviedb.org/t/p/w220_and_h330_face`;

export const useTrendingServiceQuery = () =>
  useQuery(`repoData`, async () => {
    const resp = await api.get<ITrends<IMovie>>(`3/trending/movie/day`);

    return resp.data as ITrends<IMovie>;
  });

export function getMovieImg(file: string) {
  return `${imgMoviePath}/${file}`;
}
