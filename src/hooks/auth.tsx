import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

  // evita redenrizações desnecessárias, apenas quando há a mudança.
  const contextValue = useMemo(() => {
    return {
      signIn,
      islogging,
      user,
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
