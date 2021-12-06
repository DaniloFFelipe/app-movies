import React, { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useRem } from "responsive-native";

import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/TopBar";
import Highlight from "../../components/Highlight";

import { Container, Title, TitleBox, Wrapper } from "./styles";

const Feed: React.FC = () => {
  const [search, setSearch] = useState(``);

  const rem = useRem();

  function handleCleanSearchBar() {
    setSearch(``);
  }

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
            <Title>Find Movies, Tv series and more...</Title>
          </TitleBox>

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
            onPrimary={() => {}}
            onSecundary={() => {}}
          />
        </Wrapper>
      </ScrollView>
    </Container>
  );
};

export default Feed;
