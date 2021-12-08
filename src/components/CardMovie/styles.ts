import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  margin: ${({ theme }) => theme.screen.rem(0.75)}px;
`;

export const Image = styled.Image`
  width: ${({ theme }) => theme.screen.rem(8.125)}px;
  height: ${({ theme }) => theme.screen.rem(8.125)}px;

  border-radius: 15px;
`;

export const Label = styled.View`
  flex-direction: row;
  align-items: center;

  max-width: ${({ theme }) => theme.screen.rem(7)}px;
  margin-top: ${({ theme }) => theme.screen.rem(0.5)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(0.75, true)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Year = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(0.75, true)}px;
  color: ${({ theme }) => theme.colors.gray};
`;
