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

  const [movieIndex, setMovieIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    console.log(info);

    setMovieIndex(info.viewableItems[0].index!);
  });

  return (
    <FlatList
      data={data}
      keyExtractor={(i) => String(i.id)}
      horizontal
      ItemSeparatorComponent={() => <Sparetor />}
      scrollEventThrottle={32}
      showsHorizontalScrollIndicator={false}
      onViewableItemsChanged={indexChanged.current}
      contentContainerStyle={{
        paddingLeft: rem(2),
        alignItems: `center`,
      }}
      renderItem={({ item, index }) => (
        <TrendsCard visible={movieIndex + 1 === index} movie={item} />
      )}
    />
  );
};

export default MovieSlider;
