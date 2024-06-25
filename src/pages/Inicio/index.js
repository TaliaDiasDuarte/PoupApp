
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, FlatList, RefreshControl } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import apiMockApi from '../../services/MockApi';
import { SafeAreaView } from 'react-native-web';
import  styles from './style';


export default function Inicio() {

  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState();
  const navigation = useNavigation();


    const AcessarAdicionarGasto = () => {
      navigation.navigate('AdicionarGasto');
    };
  
    const consultarGastos = async () => {
      try {
        const response = await apiMockApi.get('GASTOS'); // Replace 'GASTOS' with the actual endpoint
  
        if (response.status === 200) {
          setLista(response.data);
  
          let totalSpent = 0;
          for (const item of response.data) {
            const numericValor = parseFloat(item.valor); // Convert to a number
            if (!isNaN(numericValor)) {
              totalSpent += numericValor;
            } else {
              console.error('Invalid valor format found:', item.valor);
            }
          }
  
          const totalSpentAsFloat = parseFloat(totalSpent).toFixed(2);
          setTotal(totalSpentAsFloat);
        } else {
          console.error('Error fetching gastos:', response.statusText);
          // Handle API errors gracefully (e.g., display an error message to the user)
        }
      } catch (error) {
        console.error('Error fetching gastos:', error);
        // Handle network or other errors gracefully
      }
    };
  
    // Fetch data on component mount
    useEffect(() => {
      consultarGastos();
    }, []);
  
    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemName}>{item.titulo}</Text>
          <Text style={{ fontSize: 12, textAlignVertical: 'bottom', color: 'white' }}>
            {item.descricao}
          </Text>
        </View>
        <Text style={styles.itemPrice}>R$ {item.valor}</Text>
      </View>
    );
  
    const [refreshing, setRefreshing] = useState(false);
  
    const onRefresh = async () => {
      setRefreshing(true); // Start the refreshing animation
  
      try {
        await consultarGastos(); // Re-fetch data
      } catch (error) {
        console.error('Error refreshing data:', error);
        // Handle errors during refresh (e.g., display an error message)
      } finally {
        setRefreshing(false); // Stop the refreshing animation
      }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.gastos}>
          <Text style={styles.title}>GASTOS</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuButtonText}>&#9776;</Text>
          </TouchableOpacity>
        </View>
  
        {/* Wrap FlatList in a RefreshControl */}
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id || item.name}
          renderItem={renderItem}
          refreshing={refreshing}
          onRefresh={onRefresh}
          // Consider adding performance optimizations like getItemLayout or initialNumToRender
        />
  
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
};



