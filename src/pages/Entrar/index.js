import React, { useState, useEffect } from 'react';
import { View, Image, Animated, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const INITIAL_DELAY = 3000; // Adjust for desired pause duration
const INITIAL_DELAY2 = 2000; // Adjust for desired pause duration
const ANIMATION_DURATION = 1990; // Adjust for desired animation speed
const ANIMATION_DURATION2 = 1800; // Adjust for desired animation speed
export default function Entrar() {
    let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf'),'MontserratSemiB': require('./../../../assets/fonts/Montserrat-Regular.ttf') });

    const navigation = useNavigation();
    function AcessarLogin() {
      navigation.navigate('Login');
    }
    function AcessarCadastrar() {
      navigation.navigate('Cadastrar');
    }
  

  const [imageOpacity] = useState(new Animated.Value(0)); // Initial opacity for logo
  const [imageY] = useState(new Animated.Value(251)); // Initial Y position for logo (adjust as needed)

  const [espaco2Opacity] = useState(new Animated.Value(0)); // Initial opacity for espaco2

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const logoAnimation = Animated.sequence([
        // Animate logo opacity from 0 to 1
        Animated.timing(imageOpacity, {
          toValue: 1,
          duration: ANIMATION_DURATION / 2,
          useNativeDriver: true, // Optimize performance (if applicable)
        }),
        // Animate logo position from 100 to a lesser value (0 for top)
        Animated.timing(imageY, {
          toValue: 90, // Adjust for desired stopping point (higher for less slide)
          duration: ANIMATION_DURATION / 2,
          useNativeDriver: true, // Optimize performance (if applicable)
        }),
      ]);

      Animated.timing(espaco2Opacity, {
        toValue: 1,
        duration: ANIMATION_DURATION2,
        delay: INITIAL_DELAY2, // Start animation after logo animation
        useNativeDriver: true, // Optimize performance (if applicable)
      }).start();

      logoAnimation.start(); // Start the logo animation sequence
    }, INITIAL_DELAY);

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, []);

  return (
    <View style={estilos.container}>
      <Animated.Image
        source={require('./../../../imgs/logo.png')}
        style={[estilos.img, { opacity: imageOpacity, transform: [{ translateY: imageY }] }]}
      />
      <StatusBar style="auto" />

      <Animated.View style={[estilos.espaco2, { opacity: espaco2Opacity }]}>
        <Text style={estilos.text1}>Faça seu login ou cadastre-se para continuar</Text>

        <View style={{ flexDirection: 'row', width: '100%', height: '100%', paddingTop: 10, gap: 2, justifyContent: 'space-around', alignItems: 'center' }}>
          <TouchableOpacity style={estilos.button} onPress={AcessarLogin}>
            <Text style={estilos.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.button} onPress={AcessarCadastrar}>
            <Text style={estilos.buttonText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Set your desired background color
    alignItems: 'center', // Center the image horizontally (adjust if needed)
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  img: {
    width: 300,
    height: 300,
  },
  espaco2: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: 'black',
    width: '90%',
    maxHeight: 150,
    borderRadius: 15,
  },
  text1: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 14,
    fontWeight: '800',
    marginTop:10,
    marginBottom:-10,
    fontFamily:'Montserrat',
  },
  button: {
    
    backgroundColor: "#1E1E1E",
    width: 140,
    height: 42,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
  },
  buttonText: {
    color:'#00B14D',
    textAlign:"center",
    alignItems:"center",
    fontFamily:'Montserrat',
    fontSize: 13,
    fontWeight: '800',
  },
});
