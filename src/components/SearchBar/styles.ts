import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.lightBlue};

  padding: ${({ theme }) => theme.screen.rem(0.75)}px
    ${({ theme }) => theme.screen.rem(1)}px;

  border-radius: 999px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchButton = styled(BorderlessButton)``;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray,
}))`
  width: 50%;
  color: ${({ theme }) => theme.colors.gray};

  margin-left: ${({ theme }) => theme.screen.rem(1)}px;
`;

export const CleanButton = styled(BorderlessButton)``;
