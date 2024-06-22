import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Entrar from './src/pages/Entrar';
import Cadastrar from './src/pages/Cadastrar';
import Login from './src/pages/Login';
import Inicio from './src/pages/Inicio';
import AdicionarGasto from './src/pages/AdicionarGasto';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"screenOptions={{headerShown: false }}>
        <Stack.Screen name="Entrar" component={Entrar}/>  
        <Stack.Screen name="Cadastrar" component={Cadastrar}/> 
        <Stack.Screen name="Login" component={Login}/> 
        <Stack.Screen name="Inicio" component={Inicio}/> 
        <Stack.Screen name="AdicionarGasto" component={AdicionarGasto}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}