import { KeyboardAvoidingView, Platform } from 'react-native';

import { useState } from 'react';
import { useAuth } from '@hooks/auth';

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, islogging, forgotPassword } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
  };

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
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            type="secondary"
            autoCorrect={false}
            secureTextEntry
            onChangeText={setPassword}
          />

          <ForgotPasswordButton onPress={handleForgotPassword}>
            <ForgotPasswordButtonLabel>
              Esqueci minha senha
            </ForgotPasswordButtonLabel>
          </ForgotPasswordButton>

          <Button
            title="Entrar"
            type="secondary"
            onPress={handleSignIn}
            isLoading={islogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
