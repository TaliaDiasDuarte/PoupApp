
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, FlatList,} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import apiMockApi from '../../services/MockApi';
import { SafeAreaView } from 'react-native-web';

export default function Inicio() {

  const [lista, setLista] = useState([]);
  const [total, setTotal] = useState(721);
  const navigation = useNavigation();

  const AcessarAdicionarGasto = () => {
    navigation.navigate('AdicionarGasto');
  };

  const consultarGastos = async () => {
    try {
      const response = await apiMockApi.get('GASTOS'); // Replace 'GASTOS' with the actual endpoint

      if (response.status === 200) {
        setLista(response.data);
      } else {
        console.error('Error fetching gastos:', response.statusText);
        // Handle API errors gracefully (e.g., display an error message to the user)
      }
    } catch (error) {
      console.error('Error fetching gastos:', error);
      // Handle network or other errors gracefully
    }
  };

  // Fetch data on component mount (or when needed)
  useEffect(() => {
    consultarGastos();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.titulo}</Text>
      <Text style={styles.itemPrice}>R$ {item.valor}</Text>
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

      {/* Wrap the FlatList and remaining content in a ScrollView */}
      
        <FlatList
          data={lista}
          keyExtractor={(item) => item.id || item.name}
          renderItem={renderItem}
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
    marginHorizontal:15,
    color: "white",
  },
  itemName: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Montserrat',
    fontWeight: '600',
  },
  itemPrice: {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: 16,
    color: '#00B14D',
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
    fontSize: 18,
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

