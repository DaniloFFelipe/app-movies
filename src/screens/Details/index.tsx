import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useRem } from "responsive-native";
import { useTheme } from "styled-components";

import { Container, MovieImage, Content } from "./styles";

const Details: React.FC = () => {
  const { screen } = useTheme();
  const rem = useRem();

  return (
    <Container>
      <MovieImage
        source={{
          uri: `https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg`,
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

      <Content>{/* <Title>Dora Aventureira</Title> */}</Content>
    </Container>
  );
};

export default Details;
