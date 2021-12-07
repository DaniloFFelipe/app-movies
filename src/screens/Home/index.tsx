import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ActivityIndicator, Alert, ScrollView } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useRem } from "responsive-native";
import { useTheme } from "styled-components";

import Highlight from "../../components/Highlight";
import TrendsCard from "../../components/TrendsCard";
import {
  getMovieImg,
  trendingServiceQuery,
} from "../../services/trendingService";

import {
  Container,
  Title,
  HiglightTitle,
  TitleBox,
  Wrapper,
  QueryStatusContainer,
  QueryStatusText,
} from "./styles";

const Home: React.FC = () => {
  const { isLoading, error, data } = trendingServiceQuery();
  const rem = useRem();
  const theme = useTheme();
  const navigation = useNavigation();

  function handleDatails() {
    navigation.navigate({ name: `Details` });
  }

  if (isLoading) {
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

          <Highlight
            image={getMovieImg(data.results[0].backdrop_path)}
            title={data.results[0].title}
          />

          <Title
            style={{
              marginVertical: rem(2),
            }}
          >
            Trending
          </Title>
        </Wrapper>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingLeft: rem(1),
          }}
        >
          {data.results.map((item: any, index: number) => (
            <TrendsCard
              onPress={handleDatails}
              key={index}
              image={getMovieImg(item.backdrop_path)}
              title={item.title}
              stars={item.vote_average}
              style={{
                marginRight: rem(1),
              }}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </Container>
  );
};

export default Home;
