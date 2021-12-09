import { useEffect, useState } from "react";
import api from "../api";
import { IMovie, ITrends, ITv } from "../types";

type FetchFromApiProps = {
  search: string;
  page?: number;
  type: "movie" | "tv";
};

const fetchFromApi = async <T>({ search, page, type }: FetchFromApiProps) => {
  const resp = await api.get<ITrends<T>>(`3/search/${type}`, {
    params: {
      query: search.trim(),
      page,
    },
  });

  return resp.data.results;
};

type UseSearchProps = {
  search: string;
  page?: number;
};

export const useSearchMovieQuery = ({ search, page = 1 }: UseSearchProps) => {
  const [data, setData] = useState<IMovie[]>([]);

  useEffect(() => {
    if (search === `` || search.trim().length === 0) {
      setData([]);
    } else if (search && search.trim().length >= 3) {
      fetchFromApi<IMovie>({ search, page, type: `movie` }).then((response) => {
        if (page === 1) {
          setData(response);
        } else {
          setData((prev) => [...prev, ...response]);
        }
      });
    }
  }, [search, page]);

  return { data };
};

export const useSearchTVQuery = ({ search, page = 1 }: UseSearchProps) => {
  const [data, setData] = useState<ITv[]>([]);

  useEffect(() => {
    if (search === `` || search.trim().length === 0) {
      setData([]);
    } else if (search && search.trim().length >= 3) {
      fetchFromApi<ITv>({ search, page, type: `tv` }).then((response) => {
        if (page === 1) {
          setData(response);
        } else {
          setData((prev) => [...prev, ...response]);
        }
      });
    }
  }, [search, page]);

  return { data };
};
