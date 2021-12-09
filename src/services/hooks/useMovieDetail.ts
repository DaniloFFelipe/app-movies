import { useQuery } from "react-query";
import api from "../api";
import { MovieDetail } from "../types";

interface IUseMovieDetail {
  movieId: number;
}

export const useMovieDetail = ({ movieId }: IUseMovieDetail) =>
  useQuery([`movie`, movieId], async () => {
    const resp = await api.get<MovieDetail>(`3/movie/${movieId}`);

    return resp.data as MovieDetail;
  });
