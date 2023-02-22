<p align="center" >
  <img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="100" />
</p>

<h1 align="center">
  🚀Ativando Autenticação 🚀
</h1>

<p align="center" >
  <img alt="Repository size" src="https://img.shields.io/badge/Mobile-react--native-blue?style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/npm/types/typescript?style=for-the-badge">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/glaulher/react-native_Ignite?style=for-the-badge">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
</p>

---

## 📋 Sobre

<img align="center" src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg" width="22" /> Ativando Autenticação - Cadastro Dos Usuários - Implementando Usuários, App de pedido de pizzas, Ignite (Rocketseat) - React Native.

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
# instalar database
npx expo install @react-native-firebase/firestore

```

## Ativando a autenticação

### Firebase

criação -> authentication -> e-mail/senha -> clicar na aba Users e adicionar usuário (adicione 2 e-mails)

- Criar coleção no firestore com o nome de users -> usar o uid do usuário criado em authentication para adicionar documento

  - Um uid será utilizado para o Garçom ->

    - Criar os campos isAdmin como boolean e name como string ->
preencher isAdmin como false e name como Garçon

  - Use o outro uid para criar Admin, adcionando outro documento em user ->

    - Criar os campos isAdmin como boolean e name como string ->
preencher isAdmin como true e name como Admin

### Estrutura de autenticação e busca de dados do usuário

```javascript

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  islogging: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  // compartilhar com as interfaces
  const [islogging, setIsloggin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // compartilhar com as interfaces
  const signIn = useCallback(
    async (email: string, password: string) => {
      if (!email || !password) {
        return Alert.alert('Login', 'Informe e-mail e a senha');
      }
      setIsloggin(true);

      auth()
        .signInWithEmailAndPassword(email, password)
        .then(account => {
          // console.log(account);

          firestore()
            .collection('users')
            .doc(account.user.uid)
            .get()
            .then(profile => {
              const { name, isAdmin } = profile.data() as User;

              if (profile.exists) {
                const userData = {
                  id: account.user.uid,
                  name,
                  isAdmin,
                };
                // eslint-disable-next-line no-console
                console.log(userData);
                setUser(userData);
              }
            })
            .catch(() =>
              Alert.alert(
                'Login',
                'Não foi possível buscar os dados de perfil do usuário.',
              ),
            );
        })
        .catch(error => {
          const { code } = error;

          if (
            code === 'auth/user-not-found' ||
            code === 'auth/wrong-password'
          ) {
            return Alert.alert('Login', 'E-mail e/ou senha inválida.');
          }
          return Alert.alert('Login', 'não foi possível realizar o login.');
        })
        .finally(() => setIsloggin(false));
      // eslint-disable-next-line no-console
      return console.log('Ok');
    },

    [],
  );
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
