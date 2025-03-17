import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  document.title = "Gestor de Entradas e Saidas | Mobile App"
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{headerShown: false}}/>
      </Stack>
  );
}


// Screen Strategy: Mobile first