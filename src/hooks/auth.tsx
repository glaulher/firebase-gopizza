import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  islogging: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

const USER_COLLECTION = '@gopizza:users';

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
            .then(async profile => {
              const { name, isAdmin } = profile.data() as User;

              if (profile.exists) {
                const userData = {
                  id: account.user.uid,
                  name,
                  isAdmin,
                };

                // console.log(userData);
                await AsyncStorage.setItem(
                  USER_COLLECTION,
                  JSON.stringify(userData),
                );
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

  // carrega as informações locais
  async function loadUserStorageData() {
    setIsloggin(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User;

      setUser(userData);
    }
    setIsloggin(false);
  }

  async function signOut() {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  }

  async function forgotPassword(email: string) {
    if (!email) {
      return Alert.alert('Redefinir senha', 'Informe o seu e-mail');
    }

    return auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        Alert.alert(
          'Redefinir senha',
          'Enviamos um link para o seu e-mail! Caso não encontre, verifique a caixa de Spam do e-mail',
        ),
      )

      .catch(() =>
        Alert.alert(
          'Redefinir seha',
          'Não foi possível enviar o e-mail, tente novamente mais tarde.',
        ),
      );
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  // evita redenrizações desnecessárias, apenas quando há a mudança.
  const contextValue = useMemo(() => {
    return {
      user,
      signIn,
      signOut,
      islogging,
      forgotPassword,
    };
  }, [signIn, islogging, user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth, AuthContext };
