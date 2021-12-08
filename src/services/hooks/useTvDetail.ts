import { useQuery } from "react-query";
import api from "../api";
import { TvDetail } from "../types";

interface IUseTvDetail {
  tvId: number;
}

export const useTvDetail = ({ tvId }: IUseTvDetail) =>
  useQuery([`movie`, tvId], async () => {
    const resp = await api.get<TvDetail>(`3/tv/${tvId}`);

    return resp.data;
  });
