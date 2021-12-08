import React, { useRef, useState } from "react";
import { FlatList, ListRenderItem, ViewToken } from "react-native";
import { useRem } from "responsive-native";

import { Sparetor } from "../../screens/Home/styles";
import { IMovie } from "../../services/types";
import TrendsCard from "../TrendsCard";

// import { Container } from './styles';

interface Props {
  data: IMovie[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

const MovieSlider: React.FC<Props> = ({ data }) => {
  const rem = useRem();

  return (
    <FlatList
      data={data}
      keyExtractor={(i) => String(i.id)}
      horizontal
      ItemSeparatorComponent={() => <Sparetor />}
      scrollEventThrottle={32}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingLeft: rem(2),
        alignItems: `center`,
      }}
      renderItem={({ item }) => <TrendsCard movie={item} />}
    />
  );
};

export default MovieSlider;
