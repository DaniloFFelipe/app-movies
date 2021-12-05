import React from "react";
import { Alert, ScrollView } from "react-native";
import { useRem } from "responsive-native";

import Highlight from "../../components/Highlight";
import TrendsCard from "../../components/TrendsCard";

import { Container, Title, HiglightTitle, TitleBox, Wrapper } from "./styles";

const Home: React.FC = () => {
  const rem = useRem();
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
            image="https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
            title="Dora Aventureira"
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
          {[1, 2, 3, 4].map((item) => (
            <TrendsCard
              onPress={() => Alert.alert(`DOra`)}
              key={item}
              image="https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg"
              title="Dora Aventureira"
              stars="8.4"
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
