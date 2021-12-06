import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.screen.rem(1)}px
    ${({ theme }) => theme.screen.rem(3)}px;
`;

export const Tab = styled.TouchableOpacity`
  height: 100%;
`;

type TitleProps = {
  active: boolean;
};

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.screen.rem(1, true)}px;

  color: ${({ theme, active }) =>
    active ? theme.colors.orange : theme.colors.white};
`;

export const ActiveLine = styled.View`
  height: 2px;
  width: 35%;

  margin-top: ${({ theme }) => theme.screen.rem(0.25)}px;
  background: ${({ theme }) => theme.colors.orange};
`;
