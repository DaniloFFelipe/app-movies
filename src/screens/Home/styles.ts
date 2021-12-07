import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.bg};

  padding-top: ${({ theme }) =>
    theme.screen.statusBarHeight + theme.screen.rem(2.75)}px;
`;

export const TitleBox = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin-bottom: ${({ theme }) => theme.screen.rem(1.5)}px;
`;

export const HiglightTitle = styled.Text`
  font-size: ${({ theme }) => theme.screen.rem(1.5, true)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.orange};

  margin-right: ${({ theme }) => theme.screen.rem(0.5)}px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.screen.rem(1.5, true)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.View`
  padding: 0 ${({ theme }) => theme.screen.rem(1)}px;
`;

export const QueryStatusContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background: ${({ theme }) => theme.colors.bg};
`;

export const QueryStatusText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.screen.rem(1)}px;
`;

