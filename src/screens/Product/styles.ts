import { Button } from '@components/Button';
import { LinearGradient } from 'expo-linear-gradient';

import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.COLORS.GRADIENT,
}))`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0px 20px 24px;
`;

export const Title = styled.Text`
  font-size: 24px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE};
  `}
`;

export const DeleteLabel = styled.Text`
  font-size: 14px;

  padding: 20px 20px 20px 20px;
  margin-right: -20px;
  margin-top: -20px;
  margin-bottom: -20px;

  ${({ theme }) => css`
    font-family: ${theme.FONTS.TEXT};
    color: ${theme.COLORS.TITLE};
  `}
`;

export const Upload = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
`;

export const PickImageButton = styled(Button)`
  max-width: 90px;
  margin-left: 32px;
`;
