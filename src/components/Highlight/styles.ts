import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.ImageBackground`
  height: ${({ theme }) => theme.screen.rem(11.875)}px;
  width: 100%;

  padding: ${({ theme }) => theme.screen.rem(0.8)}px;

  justify-content: flex-end;
`;

export const Button = styled(RectButton)``;

export const Info = styled(BlurView).attrs({
  intensity: 48,
  tint: `light`,
})`
  /* width: ${({ theme }) => theme.screen.rem(12.5)}px; */
  width: 100%;
  padding: ${({ theme }) => theme.screen.rem(0.8)}px;
  margin-right: auto;
  border-radius: 20px;

  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.screen.rem(1, true)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};

  margin-left: ${({ theme }) => theme.screen.rem(0.8)}px;
`;
