import { Stack } from 'expo-router';
import {EmbarqueProvider} from '@/contexts/embarqueContext';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 5000)
  })

  return (
      <EmbarqueProvider>
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </EmbarqueProvider>
  );
}


// Screen Strategy: Mobile first