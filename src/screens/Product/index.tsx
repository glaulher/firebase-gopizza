import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container, Header, Title, DeleteLabel } from './styles';

export function Product() {
  const insets = useSafeAreaInsets();
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header style={{ paddingTop: insets.top + 33 }}>
        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  );
}
