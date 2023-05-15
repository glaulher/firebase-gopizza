/* eslint-disable react/style-prop-object */
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '@hooks/auth';

import { Loading } from '@components/Loading';
import { Signin } from '@screens/Signin';

import { Product } from '@screens/Product';

import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

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
}
