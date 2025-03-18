import { Stack } from 'expo-router';
import {EmbarqueProvider} from '@/contexts/embarqueContext';

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  document.title = "Gestor de Entradas e Saidas | Mobile App"
  return (
      <EmbarqueProvider>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </EmbarqueProvider>
  );
}


// Screen Strategy: Mobile first