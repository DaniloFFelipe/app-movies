import { BorderlessButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.bg};
`;

export const BackButton = styled(BorderlessButton)`
  position: absolute;

  margin-top: ${({ theme }) =>
    theme.screen.statusBarHeight + theme.screen.rem(1)}px;
  margin-left: ${({ theme }) => theme.screen.rem(1)}px;
  z-index: 9999;
`;

export const MovieImage = styled.ImageBackground`
  width: 100%;
  height: ${({ theme }) =>
    theme.screen.rem(17.5) + theme.screen.statusBarHeight}px;

  justify-content: space-between;
`;

export const Content = styled.View`
  flex: 1;

  padding: 0 ${({ theme }) => theme.screen.rem(1)}px;
`;

export const Section = styled.View`
  padding: ${({ theme }) => theme.screen.rem(1.5)}px 0;

  border-bottom-width: 0.2px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const Header = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(1.25, true)}px;
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: ${({ theme }) => theme.screen.rem(0.5)}px;
`;

export const Date = styled.View`
  margin-right: ${({ theme }) => theme.screen.rem(2)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(0.975, true)}px;
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: ${({ theme }) => theme.screen.rem(0.85)}px;
`;

export const GenreText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(0.975, true)}px;
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: ${({ theme }) => theme.screen.rem(0.5)}px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Genre = styled.View``;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(0.688, true)}px;
  color: ${({ theme }) => theme.colors.gray};
`;
