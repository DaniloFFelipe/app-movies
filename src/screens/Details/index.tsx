import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo } from "react";
import { useRem } from "responsive-native";
import { useTheme } from "styled-components";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { format, parseISO } from "date-fns";
import { IMovie } from "../../services/types";

import {
  Container,
  MovieImage,
  Content,
  Section,
  Header,
  Date,
  Title,
  Wrapper,
  Genre,
  BackButton,
  Text,
  MovieStatus,
} from "./styles";
import { getMovieImg } from "../../services/hooks/useTrendingService";
import GenreItem from "../../components/GenreItem";
import { useMovieDetail } from "../../services/hooks/useMovieDetail";

type Params = {
  movie: IMovie;
};

const Details: React.FC = () => {
  const route = useRoute();
  const { goBack } = useNavigation();
  const { movie } = route.params as Params;

  const { data } = useMovieDetail({
    movieId: movie.id,
  });

  const { screen, colors } = useTheme();
  const rem = useRem();

  const image = useMemo(
    () => getMovieImg(movie.backdrop_path),
    [movie.backdrop_path],
  );

  const releaseDate = useMemo(() => {
    if (data) {
      const dateParsed = parseISO(data?.release_date);

      return format(dateParsed, `MMMM d',' yyyy`);
    }
    return ``;
  }, [data?.release_date]);

  return (
    <Container>
      <BackButton onPress={goBack}>
        <Entypo name="chevron-left" size={rem(2)} color={colors.gray} />
      </BackButton>

      <MovieImage
        source={{
          uri: image,
        }}
      >
        <LinearGradient
          colors={[`rgba(0,0,0,0.8)`, `transparent`]}
          style={{ height: screen.statusBarHeight + 10, width: `100%` }}
        />

        <LinearGradient
          colors={[`transparent`, `rgba(0,0,0,0.5)`]}
          style={{ height: rem(1.75), width: `100%` }}
        />
      </MovieImage>

      <Content>
        <Section>
          <Header>{data?.title}</Header>

          <Wrapper>
            <MovieStatus>
              <AntDesign
                name="clockcircleo"
                size={rem(0.688)}
                color={colors.gray}
                style={{
                  marginRight: rem(0.5),
                }}
              />

              <Text>{data?.runtime} minutes</Text>
            </MovieStatus>

            <AntDesign
              name="star"
              size={rem(0.688)}
              color={colors.gray}
              style={{
                marginLeft: rem(1.25),
                marginRight: rem(0.5),
              }}
            />

            <Text>{data?.vote_average} (TMDb)</Text>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <Date>
              <Title>Release date</Title>
              <Text>{releaseDate}</Text>
            </Date>

            {!!data?.genres && (
              <Genre>
                <Title>Genre</Title>
                <GenreItem title={data?.genres[0].name} />
              </Genre>
            )}
          </Wrapper>
        </Section>

        <Section>
          <Title>Synopsis</Title>
          <Text>{data?.overview}</Text>
        </Section>
      </Content>
    </Container>
  );
};

export default Details;
