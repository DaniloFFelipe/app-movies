import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useRem } from "responsive-native";

import Stars from "../../assets/star.svg";

import {
  Container,
  Image,
  Info,
  Title,
  StartsConatainer,
  StartsValue,
} from "./styles";

interface Props extends RectButtonProps {
  title: string;
  image: string;
  stars: string;
}

const TrendsCard: React.FC<Props> = ({ image, title, stars, ...props }) => {
  const rem = useRem();
  return (
    <Container {...props}>
      <Image
        resizeMode="cover"
        borderRadius={rem(1.875)}
        source={{
          uri: image,
        }}
      >
        <StartsConatainer>
          <Stars />
          <StartsValue>{stars}</StartsValue>
        </StartsConatainer>

        <Info>
          <Title>{title}</Title>
        </Info>
      </Image>
    </Container>
  );
};

export default TrendsCard;
