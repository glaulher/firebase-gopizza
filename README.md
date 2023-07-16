<p align="center" >
  <img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="100" />
</p>

<h1 align="center">
  🚀Upload ImagePicker🚀
</h1>

<p align="center" >
  <img alt="Repository size" src="https://img.shields.io/badge/Mobile-react--native-blue?style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/npm/types/typescript?style=for-the-badge">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/glaulher/react-native_Ignite?style=for-the-badge">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
</p>

---

## 📋 Sobre

<img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="22" /> Upload ImagePicker - ButtonBack, App de pedido de pizzas, Ignite (Rocketseat) - React Native.

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
# Biblioteca para lidar com upload de images
npx expo install expo-image-picker
# Corrige import/no-extraneous-dependencies
npm i -S expo-image-picker

```

## ButtonBack

Precisei mudar o style de ButtonBack para corrigir um erro

De:
```javascript
export const Container = styled.TouchableOpacity``;
```
Para:

```javascript
export const Container = styled(TouchableOpacity)``;
```

### expo-image-picker:

Ao instalar o expo-image-picker foi necessário adicionar o plugin em app.json:

- Ficando conforme abaixo:

```json

  "plugins": [
      "@react-native-firebase/app",
      "@react-native-firebase/auth",
      [
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ]
    ],

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
