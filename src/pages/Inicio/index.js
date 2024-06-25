
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, FlatList, RefreshControl } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import apiMockApi from '../../services/MockApi';
import { SafeAreaView } from 'react-native-web';

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
    marginTop: 17,

  },
  title: {
    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  menuButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 13,
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
    height: 80,
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 15,
    color: "white",
  },
  itemName: {
    fontSize: 20,
    color: 'white',
    fontWeight: '400',
    marginTop:0,
  },
  itemPrice: {

    fontWeight: '600',
    fontSize: 18,
    color: '#00B14D',
    marginBottom:11
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: '#000',

  },
  totalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,

  },
  totalButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    color: '#00B14D',
    marginBottom: 18,
    fontWeight: '700',


  },
  addButton: {
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 4,
    alignContent: "center",
    borderRadius: 40,
    backgroundColor: '#00B14D',
    marginBottom: 15,
  },
  addButtonText: {
    fontSize: 28,
    color: '#ffffff',
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 4,
    paddingHorizontal: 5,

  },
  scrollView: {
    flex: 1, // Allow the ScrollView to take up the remaining space
  },
})
  ;

