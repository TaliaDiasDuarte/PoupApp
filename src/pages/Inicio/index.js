
import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView, StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {

    let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });
    const navigation = useNavigation();
    function AcessarAdicionarGasto() {
        navigation.navigate('AdicionarGasto');
      }

      

    const [total, setTotal] = useState(721);

    const data = [
        {
          day: 'Hoje',
          items: [
            { name: 'Headset da JBL', price: 'R$ 224,99' },
            { name: 'Marmita', price: 'R$ 27,00' },
            { name: 'Café no Rezende', price: 'R$ 12,75' },
          ],
        },
        {
          day: 'Ontem',
          items: [
            { name: 'Moletom da Nike', price: 'R$ 110,00' },
            { name: 'Marmita', price: 'R$ 25,00' },
          ],
        },
        {
          day: 'Quarta-feira',
          items: [
            { name: 'Lanche do King Mek', price: 'R$ 34,90' },
            { name: 'Marmita', price: 'R$ 25,00' },
          ],
        },
        {
          day: 'Terça-feira',
          items: [],
        },
      ];
  
    const renderItem = (item) => (
        
  <View style={styles.itemContainer} key={item.name}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      
    
        </View>
    
);

    const renderDay = (day) => (
      <View key={day.day} style={styles.dayContainer}>
        <Text style={styles.dayTitle}>{day.day}</Text>
        <ScrollView>
          {day.items.map((item) => renderItem(item))}
        </ScrollView>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.gastos}>
          <Text style={styles.title}>GASTOS</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuButtonText}>&#9776;</Text>
          </TouchableOpacity>
        </View>
  
        <ScrollView>
          {data.map((day) => renderDay(day))}
        </ScrollView>
  
        <View style={styles.totalContainer}>
          <TouchableOpacity style={styles.totalButton}>
            <Text style={styles.totalButtonText}>
              GASTANDO R$ {total} NESTE MÊS
            </Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.addButton} onPress={AcessarAdicionarGasto}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    gastos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop:17,
    
    },
    title: {
    fontFamily:'Montserrat',
    fontWeight: '800',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    },
    menuButton: {
      paddingHorizontal: 10,
      paddingVertical:8,
      paddingHorizontal:13,
      borderRadius: 8,
      backgroundColor: 'black',
    },
    menuButtonText: {
      fontSize: 24,
      color: '#ffffff',
    },
    dayContainer: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#222',
    },
    dayTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#fff',
       
      },
      itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        height:60,
        backgroundColor:"black",
        borderRadius:10,
        padding:10
        
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontFamily:'Montserrat',
         fontWeight: '600',
      },
      itemPrice: {
        fontFamily:'Montserrat',
        fontWeight: '600',
        fontSize: 16,
        color: '#00B14D',
      },
      totalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#000',
      },
      totalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
      
      },
      totalButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        color: '#00B14D',
        marginBottom:18,
        fontWeight: '700',


      },
      addButton: {
        paddingHorizontal:12,
        paddingTop:4,
        paddingBottom:4,
        alignContent:"center",
        borderRadius: 40,
        backgroundColor: '#00B14D',
       marginBottom:15,
      },
      addButtonText: {
        fontSize: 28,
        color: '#ffffff',
        textAlign: 'center',
        paddingTop:2,
        paddingBottom:4,
        paddingHorizontal:5,
        
      },
    });