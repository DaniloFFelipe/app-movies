import { useQuery } from "react-query";
import { API_KEY, BASE_URL } from "./api";

const imgMoviePath = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

export const trendingServiceQuery = () => useQuery('repoData', () =>
  fetch(`${BASE_URL}3/trending/movie/day?api_key=${API_KEY}`).then(res =>
    res.json()
  )
)

export function getMovieImg(file: string) {
  return `${imgMoviePath}/${file}`
}