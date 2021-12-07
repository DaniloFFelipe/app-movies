import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.bg};
`;

export const MovieImage = styled.ImageBackground`
  width: 100%;
  height: ${({ theme }) =>
    theme.screen.rem(17.5) + theme.screen.statusBarHeight}px;

  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;
`;
