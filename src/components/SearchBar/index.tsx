import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components/native";
import { useRem } from "responsive-native";
import { Container, SearchButton, Input, CleanButton, Wrapper } from "./styles";

interface Props {
  placeHolder?: string;
  value: string;
  onChangeText: (value: string) => void;
  onSearch: () => void;
  onClean: () => void;
}

const SearchBar: React.FC<Props> = ({
  value,
  placeHolder,
  onChangeText,
  onSearch,
  onClean,
}) => {
  const { colors } = useTheme();

  const rem = useRem();

  return (
    <Container>
      <Wrapper>
        <SearchButton onPress={onSearch}>
          <Feather name="search" size={rem(1)} color={colors.white} />
        </SearchButton>

        <Input
          placeholder={placeHolder}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSearch}
        />
      </Wrapper>

      {!!value && (
        <CleanButton onPress={onClean}>
          <Ionicons name="close" size={rem(0.75)} color={colors.gray} />
        </CleanButton>
      )}
    </Container>
  );
};

export default SearchBar;
