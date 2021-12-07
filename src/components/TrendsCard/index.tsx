import React, { useEffect, useMemo } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useRem } from "responsive-native";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  useDerivedValue,
  runOnJS,
} from "react-native-reanimated";

import { View } from "react-native";
import Stars from "../../assets/star.svg";

import {
  Container,
  Image,
  Info,
  Title,
  StartsConatainer,
  StartsValue,
} from "./styles";

import { IMovie } from "../../services/types";
import { getMovieImg } from "../../services/useTrendingService";

interface Props {
  movie: IMovie;
  visible?: boolean;
}

const TrendsCard: React.FC<Props> = ({ movie, visible = true }) => {
  const rem = useRem();

  const { navigate } = useNavigation();

  function handleDetails() {
    navigate(`Details`, {
      movie,
    });
  }

  const image = useMemo(
    () => getMovieImg(movie.backdrop_path),
    [movie.backdrop_path],
  );

  return (
    <Container onPress={handleDetails}>
      <Image
        isShowing={visible}
        resizeMode="cover"
        borderRadius={rem(1.875)}
        source={{
          uri: image,
        }}
      >
        <StartsConatainer>
          <Stars />
          <StartsValue>{movie.vote_average}</StartsValue>
        </StartsConatainer>

        <Info>
          <Title>{movie.title}</Title>
        </Info>
      </Image>
    </Container>
  );
};

export default TrendsCard;
