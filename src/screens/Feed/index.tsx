import React, { useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useRem } from "responsive-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

import { useTheme } from "styled-components";

import CardMovie from "../../components/CardMovie";
import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/TopBar";
import { IMovie, ITv } from "../../services/types";
import {
  useTrendingMovieQuery,
  useTrendingTVQuery,
} from "../../services/hooks/useTrendingServicePage";

import { Container, Title, TitleBox, Wrapper, LoadingContent } from "./styles";
import CardTv from "../../components/CardTv";

const { createAnimatedComponent } = Animated;

const AnimatedFlatListMovie = createAnimatedComponent(
  FlatList as new () => FlatList<IMovie>,
);
const AnimatedFlatListTV = createAnimatedComponent(
  FlatList as new () => FlatList<ITv>,
);

const Feed: React.FC = () => {
  const [pageMovie, setPageMovie] = useState(1);
  const [type, setType] = useState<"movie" | "tv">(`movie`);
  const rem = useRem();
  const { colors } = useTheme();

  const { data: movieData } = useTrendingMovieQuery({
    page: pageMovie,
  });

  const { data: tvData } = useTrendingTVQuery({
    page: pageMovie,
  });

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
          onSearch={() => {}}
          onClean={handleCleanSearchBar}
        />
        <TopBar
          titlePrimary="Movies"
          titleSecundary="Tv Series"
          onPrimary={() => handleSwitch(`movie`)}
          onSecundary={() => handleSwitch(`tv`)}
        />

        {type === `movie` ? (
          <AnimatedFlatListMovie
            data={movieData}
            onScroll={scrollHanlder}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={32}
            ListFooterComponent={() => (
              <LoadingContent>
                <ActivityIndicator color={colors.white} />
              </LoadingContent>
            )}
            contentContainerStyle={{
              paddingBottom: rem(10),
            }}
            numColumns={2}
            onEndReached={() => setPageMovie((old) => old + 1)}
            onEndReachedThreshold={1}
            keyExtractor={(i) => String(i.id)}
            renderItem={({ item }) => <CardMovie data={item} />}
          />
        ) : (
          <AnimatedFlatListTV
            data={tvData}
            onScroll={scrollHanlder}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={32}
            ListFooterComponent={() => (
              <LoadingContent>
                <ActivityIndicator color={colors.white} />
              </LoadingContent>
            )}
            contentContainerStyle={{
              paddingBottom: rem(10),
            }}
            numColumns={2}
            onEndReached={() => setPageMovie((old) => old + 1)}
            onEndReachedThreshold={1}
            keyExtractor={(i) => String(i.id)}
            renderItem={({ item }) => <CardTv data={item} />}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Feed;
