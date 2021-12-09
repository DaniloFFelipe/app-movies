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
import CardTV from "../../components/CardTv";
import {
  useSearchMovieQuery,
  useSearchTVQuery,
} from "../../services/hooks/useSearchService";

const { createAnimatedComponent } = Animated;

const AnimatedFlatListMovie = createAnimatedComponent(
  FlatList as new () => FlatList<IMovie>,
);
const AnimatedFlatListTV = createAnimatedComponent(
  FlatList as new () => FlatList<ITv>,
);

const Feed: React.FC = () => {
  const [pageMovie, setPageMovie] = useState(1);
  const [searchPageMovie, setSearchPageMovie] = useState(1);
  const [type, setType] = useState<"movie" | "tv">(`movie`);
  const rem = useRem();
  const { colors } = useTheme();

  const { data: movieTrendingData } = useTrendingMovieQuery({
    page: pageMovie,
  });

  const { data: tvTrendingData } = useTrendingTVQuery({
    page: pageMovie,
  });

  const [search, setSearch] = useState(``);

  const { data: movieSearchData } = useSearchMovieQuery({
    search,
    page: searchPageMovie,
  });

  const { data: tvSearchData } = useSearchTVQuery({
    search,
    page: searchPageMovie,
  });

  const scrollY = useSharedValue(0);
  const scrollHanlder = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const h = rem(5.25);

  const headerStyleAnimation = useAnimatedStyle(() => ({
    height: interpolate(scrollY.value, [0, h], [h, 0], Extrapolate.CLAMP),
    opacity: interpolate(scrollY.value, [0, 150], [1, 0]),
  }));

  function handleCleanSearchBar() {
    setSearch(``);
    setSearchPageMovie(1);
  }

  function handleSwitch(switchType: "movie" | "tv") {
    setType(switchType);
  }

  function updatePage() {
    if (movieSearchData?.length > 0 || tvSearchData?.length > 0) {
      setSearchPageMovie((old) => old + 1);
    } else {
      setPageMovie((old) => old + 1);
    }
  }

  const movieData =
    type === `movie` && movieSearchData?.length > 0
      ? movieSearchData
      : movieTrendingData;
  const tvData =
    type === `tv` && tvSearchData?.length > 0 ? tvSearchData : tvTrendingData;

  return (
    <Container>
      <Wrapper>
        <Animated.View style={headerStyleAnimation}>
          <TitleBox>
            <Title>Find Movies, TV Series{`\n`}and More...</Title>
          </TitleBox>
        </Animated.View>
        <SearchBar
          value={search}
          placeHolder="Search"
          onChangeText={setSearch}
          onSearch={() => setSearch((prev) => `${prev} `)}
          onClean={handleCleanSearchBar}
        />
        <TopBar
          titlePrimary="Movies"
          titleSecundary="TV Series"
          onPrimary={() => handleSwitch(`movie`)}
          onSecundary={() => handleSwitch(`tv`)}
        />

        {type === `movie` ? (
          <AnimatedFlatListMovie
            data={movieData}
            onScroll={scrollHanlder}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={32}
            contentContainerStyle={{
              paddingBottom: rem(10),
            }}
            numColumns={2}
            onEndReached={updatePage}
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
            contentContainerStyle={{
              paddingBottom: rem(10),
            }}
            numColumns={2}
            onEndReached={updatePage}
            onEndReachedThreshold={1}
            keyExtractor={(i) => String(i.id)}
            renderItem={({ item }) => <CardTV data={item} />}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default Feed;
