import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)``;

export const Image = styled.ImageBackground`
  height: ${({ theme }) => theme.screen.rem(18.75 * 0.8)}px;
  width: ${({ theme }) => theme.screen.rem(12.5 * 0.8)}px;

  padding: ${({ theme }) => theme.screen.rem(0.8)}px;

  justify-content: flex-end;
`;

export const InfoBox = styled.View`
  overflow: hidden;
  border-radius: 10px;
`;

export const Info = styled(BlurView).attrs({
  intensity: 48,
  tint: `light`,
})`
  /* width: ${({ theme }) => theme.screen.rem(12.5)}px; */
  padding: ${({ theme }) => theme.screen.rem(0.5)}px;

  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.screen.rem(0.875, true)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};

  margin-left: ${({ theme }) => theme.screen.rem(0.5)}px;
`;

export const StartsConatainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;

  margin-top: ${({ theme }) => theme.screen.rem(1)}px;
  margin-right: ${({ theme }) => theme.screen.rem(1)}px;
  border-radius: ${({ theme }) => theme.screen.rem(0.5)}px;

  overflow: hidden;
`;

export const BlurBox = styled(BlurView).attrs({
  intensity: 55,
  tint: `light`,
})`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  padding: ${({ theme }) => theme.screen.rem(0.5)}px
    ${({ theme }) => theme.screen.rem(0.5)}px;
`;

export const StartsValue = styled.Text`
  font-size: ${({ theme }) => theme.screen.rem(0.875, true)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};

  margin-left: ${({ theme }) => theme.screen.rem(0.5)}px;
`;
