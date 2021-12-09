import { useEffect, useState } from "react";
import api from "../api";
import { IMovie, ITrends, ITv } from "../types";

type FetchFromApiProps = {
  page?: number;
  type: "movie" | "tv";
};

type UseTrendingProps = {
  page?: number;
};

const fetchFromApi = async <T>({ page, type }: FetchFromApiProps) => {
  const resp = await api.get<ITrends<T>>(`3/trending/${type}/day`, {
    params: {
      page,
    },
  });

  return resp.data.results;
};

export const useTrendingMovieQuery = ({ page = 1 }: UseTrendingProps) => {
  const [data, setData] = useState<IMovie[]>([]);

  useEffect(() => {
    fetchFromApi<IMovie>({ page, type: `movie` }).then((response) =>
      setData((prev) => [...prev, ...response]),
    );
  }, [page]);

  return { data };
};

export const useTrendingTVQuery = ({ page = 1 }: UseTrendingProps) => {
  const [data, setData] = useState<ITv[]>([]);

  useEffect(() => {
    fetchFromApi<ITv>({ page, type: `tv` }).then((response) =>
      setData((prev) => [...prev, ...response]),
    );
  }, [page]);

  return { data };
};
