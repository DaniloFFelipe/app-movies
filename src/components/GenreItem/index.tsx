import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import { Container, Text } from "./styles";

interface Props {
  title: string;
}

const GenreItem: React.FC<Props> = ({ title }) => (
  <LinearGradient
    locations={[0, 1]}
    end={{ x: 1, y: 0 }}
    colors={[`rgba(188, 188, 188, 0.25)`, `rgba(250, 240, 202,0.05)`]}
    style={{
      padding: 2,
      borderRadius: 999,
    }}
  >
    <Container>
      <Text>{title}</Text>
    </Container>
  </LinearGradient>
);

export default GenreItem;
