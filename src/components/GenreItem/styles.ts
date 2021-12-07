import styled from "styled-components/native";

export const Container = styled.View`
  padding: ${({ theme }) => theme.screen.rem(0.35)}px
    ${({ theme }) => theme.screen.rem(0.688)}px;

  border-radius: 999px;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(0.688, true)}px;
  color: ${({ theme }) => theme.colors.gray};
`;
