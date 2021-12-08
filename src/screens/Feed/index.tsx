import React, { useState } from "react";
import { Alert, FlatList } from "react-native";
import { useRem } from "responsive-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import Card from "../../components/Card";
import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/TopBar";
import { useTrendingServiceQuery } from "../../services/useTrendingService";

import { Container, Title, TitleBox, Wrapper } from "./styles";
import { IMovie } from "../../services/types";

const { createAnimatedComponent } = Animated;

const AnimatedFlatList = createAnimatedComponent(
  FlatList as new () => FlatList<IMovie>,
);

const Feed: React.FC = () => {
  const { data: movieData, isLoading } = useTrendingServiceQuery();
  const rem = useRem();

  const [type, setType] = useState<"movie" | "tv">(`movie`);
  const [search, setSearch] = useState(``);

  const scrollY = useSharedValue(0);
  const scrollHanlder = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const h = rem(5);

  const headerStyleAnimation = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, h], [h, 0], Extrapolate.CLAMP),
    opacity: interpolate(scrollY.value, [0, 150], [1, 0]),
  }));

  function handleCleanSearchBar() {
    setSearch(``);
  }

  function handleSwitch(switchType: "movie" | "tv") {
    setType(switchType);
  }

  return (
    <Container>
      <Wrapper>
        <Animated.View style={headerStyleAnimation}>
          <TitleBox>
            <Title>Find Movies, Tv series and more...</Title>
          </TitleBox>
        </Animated.View>
        <SearchBar
          value={search}
          placeHolder="Search"
          onChangeText={setSearch}
          onSearch={() => Alert.alert(`TODO`)}
          onClean={handleCleanSearchBar}
        />
        <TopBar
          titlePrimary="Movies"
          titleSecundary="Tv Series"
          onPrimary={() => handleSwitch(`movie`)}
          onSecundary={() => handleSwitch(`tv`)}
        />

        <AnimatedFlatList
          data={movieData}
          onScroll={scrollHanlder}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(i) => String(i.id)}
          renderItem={({ item }) => <Card data={item} />}
        />
      </Wrapper>
    </Container>
  );
};

export default Feed;
