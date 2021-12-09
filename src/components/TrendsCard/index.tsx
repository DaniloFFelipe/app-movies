import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { useRem } from "responsive-native";

import { View } from "react-native";
import Stars from "../../assets/star.svg";

import {
  Container,
  Image,
  Info,
  Title,
  StartsConatainer,
  StartsValue,
  BlurBox,
  InfoBox,
} from "./styles";

import { IMovie } from "../../services/types";
import { getMovieImg } from "../../services/hooks/useTrendingService";

interface Props {
  movie: IMovie;
}

const TrendsCard: React.FC<Props> = ({ movie }) => {
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
    <Container onPress={handleDetails}>
      <Image
        resizeMode="cover"
        borderRadius={rem(1.875)}
        source={{
          uri: image,
        }}
      >
        <StartsConatainer>
          <BlurBox>
            <Stars />
            <StartsValue>{movie.vote_average}</StartsValue>
          </BlurBox>
        </StartsConatainer>

        <InfoBox>
          <Info>
            <Title>{movie.title}</Title>
          </Info>
        </InfoBox>
      </Image>
    </Container>
  );
};

export default TrendsCard;
