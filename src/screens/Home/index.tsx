import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useRem } from "responsive-native";
import { useTheme } from "styled-components";

import Highlight from "../../components/Highlight";
import { useTrendingServiceQuery } from "../../services/hooks/useTrendingService";

import {
  Container,
  Title,
  HiglightTitle,
  TitleBox,
  Wrapper,
  QueryStatusContainer,
  QueryStatusText,
} from "./styles";
import MovieSlider from "../../components/MovieSlider";

const Home: React.FC = () => {
  const { isLoading, error, data } = useTrendingServiceQuery();
  const rem = useRem();
  const theme = useTheme();

  if (isLoading || !data) {
    return (
      <QueryStatusContainer>
        <ActivityIndicator color={theme.colors.white} size="large" />
      </QueryStatusContainer>
    );
  }
  if (error) {
    return (
      <QueryStatusContainer>
        <Icon
          name="times-circle"
          type="font-awesome"
          color="#f50"
          size={70}
          onPress={() => console.log(`hello`)}
        />
        <QueryStatusText>
          Ocorreu um erro ao carregar a página inicial
        </QueryStatusText>
      </QueryStatusContainer>
    );
  }
  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: rem(1),
        }}
      >
        <Wrapper>
          <TitleBox>
            <HiglightTitle>Find</HiglightTitle>
            <Title>Everywhere</Title>
          </TitleBox>

          <Highlight movie={data.results[0]} />

          <Title
            style={{
              marginVertical: rem(2),
            }}
          >
            Trending
          </Title>
        </Wrapper>

        <MovieSlider data={data.results} />
      </ScrollView>
    </Container>
  );
};

export default Home;
