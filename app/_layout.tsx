import { Image, Platform, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { Text } from 'react-native';
import { EmbarquesProvider } from '@/api/context/EmbarqueContext';
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);
  
  // if (Platform.OS === 'web') {
  //   return (
  //     <ScrollView contentContainerStyle={styles.container}>
  //       <Image style={styles.image_err} source={require('@/assets/images/mobile.png')}  resizeMode="contain"/>
  //       <Text style={styles.text_err}>Versão Web não suportada!</Text>
  //     </ScrollView>
  //   );
  // }


  return (
    <EmbarquesProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    </EmbarquesProvider>
  );
}

const styles = StyleSheet.create({
  text_err: {
    color: 'rgb(18, 144, 60)',
    fontSize: '6rem',
    fontWeight: '600'
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 2,
  },

  btnBack: {
    marginTop: 40,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 100,
    paddingRight: 100,
    
    backgroundColor: 'rgb(4, 109, 39)',
  },
  txtBtnBack: {
    color: 'white',
    fontSize: '4rem'
  },

})

// Screen Strategy: Mobile first