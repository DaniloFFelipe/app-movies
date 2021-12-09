import { LinearGradient } from "expo-linear-gradient";
import React, { useMemo } from "react";
import { useRem } from "responsive-native";
import { useTheme } from "styled-components";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

import { format, parseISO } from "date-fns";
import { IMovie, ITv } from "../../services/types";

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
import { useTvDetail } from "../../services/hooks/useTvDetail";

type Params = {
  tv: ITv;
};

const DetailsTv: React.FC = () => {
  const route = useRoute();
  const { goBack } = useNavigation();
  const { tv } = route.params as Params;

  const { data } = useTvDetail({
    tvId: tv.id,
  });

  const { screen, colors } = useTheme();
  const rem = useRem();

  const image = useMemo(
    () => getMovieImg(tv.backdrop_path),
    [tv.backdrop_path],
  );

  const releaseDate = useMemo(() => {
    if (data) {
      const dateParsed = parseISO(tv?.first_air_date);

      return format(dateParsed, `MMMM d',' yyyy`);
    }
    return ``;
  }, [data?.first_air_date]);

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
          <Header>{data?.name}</Header>

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

              <Text>{data?.number_of_seasons} seasons</Text>
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

export default DetailsTv;
