import { KeyboardAvoidingView, Platform } from 'react-native';

import { Button } from '@components/Button';
import { Input } from '@components/Input';
import BrandImg from '@assets/brand.png';

import {
  Brand,
  Container,
  Content,
  ForgotPasswordButton,
  ForgotPasswordButtonLabel,
  Title,
} from './styles';

export function Signin() {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Content>
          <Brand source={BrandImg} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input
            placeholder="Senha"
            type="secondary"
            autoCorrect={false}
            secureTextEntry
          />

          <ForgotPasswordButton>
            <ForgotPasswordButtonLabel>
              Esqueci minha senha
            </ForgotPasswordButtonLabel>
          </ForgotPasswordButton>

          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
