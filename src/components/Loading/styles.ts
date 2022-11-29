import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.PRIMARY_800,
  size: 'large',
}))``;
