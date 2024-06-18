
import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView, StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


export default function AdicionarGasto() {

    let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });

    const navigation = useNavigation();

    return (
   <View>
        <Text style={{paddingTop:40}}>Teste</Text>
   </View>
    );
  }
  
  const styles = StyleSheet.create({
 
    });