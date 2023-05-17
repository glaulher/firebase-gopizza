<p align="center" >
  <img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="100" />
</p>

<h1 align="center">
  🚀Header de Produto🚀
</h1>

<p align="center" >
  <img alt="Repository size" src="https://img.shields.io/badge/Mobile-react--native-blue?style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/npm/types/typescript?style=for-the-badge">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/glaulher/react-native_Ignite?style=for-the-badge">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
</p>

---

## 📋 Sobre

<img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="22" /> Header de Produto, App de pedido de pizzas, Ignite (Rocketseat) - React Native.

---

## 📂 Como rodar este projeto

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com), [NodeJs](https://nodejs.org/en/) e [Android Studio](https://developer.android.com/studio) Instalado em seu computador.

### 🌀 Clonando o repositório

```bash
# Clone este repositório
$ git clone https://github.com/glaulher/firebase-gopizza.git

# Acesse a pasta do projeto no terminal/cmd
$ cd firebase-gopizza

```

### 🎲 Rodando a Aplicação

```bash
# Instale as dependências
$ npm install

# Execute o projeto
$ npm run start
```

✔️ Notas:

- Pacotes utilizados:

```bash
# Instalar o expo
npm i -g expo-cli
# Criar e instalar Builds
npm i -g eas-cli
# Criar o App
npx create-expo-app --template # Nomear como gopizza
# Para executar o App se houve alteração na biblioteca nativa
npx expo install expo-dev-client
# Path para importações locais
npm install -D babel-plugin-module-resolver
# Fontes utilizadas no App
expo install @expo-google-fonts/dm-sans @expo-google-fonts/dm-serif-display
# css
npm install styled-components
# Tipos para styled-components
npm install -D @types/styled-components-react-native
# Cores gradiente
npx expo install expo-linear-gradient
# gestos
npx expo install react-native-gesture-handler
# biblioteca utilizada para o correto espaçamento no lugar da react-native-iphone-x-helper que está depreciada.
npx expo install react-native-safe-area-context
# Instalar o modulo para autenticação - necessário add plugin ver doc.
npx expo install @react-native-firebase/auth
# Instalar o modulo para app - necessário add plugin ver doc.
npx expo install @react-native-firebase/app
# Instalar database
npx expo install @react-native-firebase/firestore
# Instala asyncStorage para persistência de dados offline
npx expo install @react-native-async-storage/async-storage
# Biblioteca para lidar com áreas seguras do telefone
npx expo react-native-safe-area-context

```

## Header

Para criação da header, utilizei a biblioteca react-native-safe-area-context para lidar com espaçamento do statusbar.

### Implementando:

- Criando  header de produto:

- index.tsx:

```javascript
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

```
- styles.ts

```javascript

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


```

- Foi necessário adicionar SafeAreaProvider  em App.tsx

```javascript
...
import { SafeAreaProvider } from 'react-native-safe-area-context';
...
 return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? (
          <AuthProvider>
            <StatusBar
              style="light"
              translucent
              backgroundColor="transparent"
            />
            <SafeAreaProvider>
              <Product />
            </SafeAreaProvider>
          </AuthProvider>
        ) : (
          <Loading />
        )}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
  ...

```

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org)

---


## 🧑 Autor

<img style="border-radius: 75px;" src="https://glaulher.github.io/assets/img/sample/avatar.jpeg" width="150px;" alt=""/>
 <h4>Glaulher Medeiros</h4>

<p align="left">
<span style="inline-block;">
  <a href="https://www.linkedin.com/in/glaulher-medeiros-03799967/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" ></a>
</span>
<span style="inline-block;">
  <a href="https://glaulher.github.io/" target="_blank"><img src="https://img.shields.io/badge/github.io-gray?style=for-the-badge&logo=github&logoColor=white" ></a>
</span>

<span style="inline-block;">
  <a href="https://terminaldopenguin.blogspot.com/" target="_blank"><img src="https://img.shields.io/badge/blog-orange?style=for-the-badge&logo=blogger&logoColor=white"></a>
</span>
</p>

---

## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA](https://github.com/glaulher/react-native_Ignite/blob/main/LICENSE) para saber mais.
