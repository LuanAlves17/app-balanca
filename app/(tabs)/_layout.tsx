import { Tabs } from 'expo-router';
 import React from 'react';
 import { Platform } from 'react-native';
 
 import { HapticTab } from '@/components/native/tabs/HapticTab';
 import TabBarBackground from '@/components/native/tabs/ui/TabBarBackground';
 import { Colors } from '@/constants/Colors';
 import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { EmbarqueProvider } from '@/contexts/embarqueContext';

 
 export default function TabLayout() {
   const colorScheme = useColorScheme();
 
   return (
    <EmbarqueProvider>
     <Tabs
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
         headerShown: false,
         tabBarButton: HapticTab,
         tabBarBackground: TabBarBackground,
         tabBarStyle: Platform.select({
           ios: {
             position: 'absolute',
           },
           default: {},
         }),
       }}>
       <Tabs.Screen
         name="index"
         options={{
           title: 'Painel',
           tabBarIcon: ({ color }) => <FontAwesome name="truck" size={24} color={color}/>,
         }}
       />
       <Tabs.Screen
         name="historico"
         options={{
           title: 'Auditoria / Historico',
           tabBarIcon: ({ color }) => <FontAwesome name="history" size={24} color={color} />,
         }}
       />
     </Tabs>
     </EmbarqueProvider>
   );
 }