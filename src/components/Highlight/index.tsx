import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { useRem } from "responsive-native";

import Play from "../../assets/play-active.svg";
import { IMovie } from "../../services/types";
import { getMovieImg } from "../../services/hooks/useTrendingService";

import { Container, Info, Title, Button } from "./styles";

interface Props {
  movie: IMovie;
}

const Highlight: React.FC<Props> = ({ movie }) => {
  const rem = useRem();

  const { navigate } = useNavigation();

  function handleDetails() {
    const routeName = `Details` as never;
    const params = {
      movie,
    } as never;

    navigate(routeName, params);
  }

  const image = useMemo(
    () => getMovieImg(movie.backdrop_path),
    [movie.backdrop_path],
  );

  return (
    <Container
      resizeMode="cover"
      borderRadius={rem(1.875)}
      source={{
        uri: image,
      }}
    >
      <Button onPress={handleDetails}>
        <Info>
          <Play />

          <Title>{movie.title}</Title>
        </Info>
      </Button>
    </Container>
  );
};

export default Highlight;
