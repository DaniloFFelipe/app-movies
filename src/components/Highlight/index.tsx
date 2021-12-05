import React from "react";
import { useRem } from "responsive-native";

import Play from "../../assets/play-active.svg";

import { Container, Info, Title } from "./styles";

interface Props {
  title: string;
  image: string;
}

const Highlight: React.FC<Props> = ({ image, title }) => {
  const rem = useRem();
  return (
    <Container
      resizeMode="cover"
      borderRadius={rem(1.875)}
      source={{
        uri: image,
      }}
    >
      <Info>
        <Play />

        <Title>{title}</Title>
      </Info>
    </Container>
  );
};

export default Highlight;
