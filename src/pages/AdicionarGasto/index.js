
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, TextInput, Switch, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'
import MaskInput, { Masks } from 'react-native-mask-input';
import apiMockApi from '../../services/MockApi';



export default function AdicionarGasto() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [pagamentoMetodo, setPagamentoMetodo] = useState('PIX');
  const [installments, setInstallments] = useState(false);
  // const [image, setImage] = useState(null);

  let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });

  const [selecioneOpcao, setSelecioneOpcao] = useState('');

  const handleOptionPress = (option) => {
    setSelecioneOpcao(option);
  };


  const navigation = useNavigation();
  function AcessarInicio() {
    navigation.navigate('Inicio');
  }

  // const handlePaymentChange = (method) => {
  //   setPagamentoMetodo(method);
  // };

  // const handleInstallmentsChange = () => {
  //   setInstallments(!installments);
  // };

  // const handleImageUpload = (image) => {
  //   setImage(image);
  // };

  const handleSubmit = () => {
      // Processar dados do gasto
      console.log('Dados do gasto:', {
        titulo,
        descricao,
        valor,
        selecioneOpcao,
        // installments,
        // image,
      });
      const dados = {
        "titulo": titulo,
        "descricao": descricao,
        "valor": valor,
        "pagamentoMetodo": selecioneOpcao,
      };
      

      apiMockApi
      .post("GASTOS", dados)
      .then((response) => {
        if (response.status === 201) {
          alert("Registro inserido com sucesso!");
          setTitulo('');
          setDescricao('');
          setValor('');
          setSelecioneOpcao('');
        } else {
          alert("Erro ao cadastrar usuário!");
        }
      })


  };



  return (


    <View style={styles.container}>

      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity onPress={AcessarInicio} >
          <MaterialIcons
            name={'arrow-back-ios'}
            size={30}
            color={'#FFFFFF'}
            style={{ justifyContent: 'center', alignItems: 'center',paddingTop:20, }}
          ></MaterialIcons>
        </TouchableOpacity>

        <Text style={styles.titulo}>GASTOS</Text>

      </View>


      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />



      <View style={{ flexDirection: 'row', height: 150 ,}}>
        <View style={{ flexDirection: 'column', width: 179, }}>

          <View style={{ flexDirection: 'row', }}>

            <View style={styles.valorContainer}>
               <MaskInput
               style={styles.valorInput}
               value={valor}
               onChangeText={setValor}
               mask={Masks.BRL_CURRENCY}
               keyboardType="numeric"
             />

            </View>
          </View>
          <View style={{ backgroundColor: 'black', height: 30, marginTop: -10,borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
            <Text style={{ color: "white", textAlign:"center"}}>Quanto foi gasto?</Text>
          </View>

        </View>

        <View style={styles.pagamentoMetodoContainer}>
          <View style={styles.pagamentoMetodoOption}>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionPress('PIX')}
            >
              <View style={[styles.circle, selecioneOpcao === 'PIX' && styles.selected2]} />

              <Text style={styles.optionText}>PIX</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.option}
              onPress={() => handleOptionPress('CARTÃO DE CRÉDITO')}
            >
              <View style={[styles.circle, selecioneOpcao === 'CARTÃO DE CRÉDITO' && styles.selected2]} />
              <Text style={styles.optionText}>CARTÃO DE CRÉDITO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.option,]}
              onPress={() => handleOptionPress('DINHEIRO')}
            >
              <View style={[styles.circle, selecioneOpcao === 'DINHEIRO' && styles.selected2]} />
              <Text style={styles.optionText}>DINHEIRO</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>




      <View style={styles.installmentsContainer}>

      <TouchableOpacity style={styles.button}>
      <MaterialIcons
            name={'keyboard-arrow-down'}
            size={30}
            color={'#FFFFFF'}
            style={{ justifyContent: 'center', alignItems: 'center',}}
          ></MaterialIcons>
      <Text style={styles.buttonText}>A vista</Text>
    </TouchableOpacity>
      </View>


      
      <TouchableOpacity style={styles.uploadButton} onPress={() => handleImageUpload()}>

        <Text style={styles.uploadButtonText}>Subir arquivo/foto</Text>
       <MaterialIcons
            name={'backup'}
            size={30}
            color={'#FFFFFF'}
            style={{ justifyContent: 'center', alignItems: 'center',}}
          ></MaterialIcons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText2}>ADICIONAR GASTO</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop:20,
    fontFamily:'Montserrat',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
    backgroundColor: "black",
  },
  valorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius:10,
    width:180,

  },
  valorSymbol: {
    height: 120,
    paddingTop: 50,
    backgroundColor: "black",
    fontSize: 28,
    color: '#00B14D',
    textAlign: "center",
    borderTopLeftRadius: 7,
    borderRadius:10,
  },
  valorInput: {
   borderTopRightRadius:10,
   borderTopLeftRadius:10,
    height: 120,
    width: 179,
    backgroundColor: "black",
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    flex: 1,
    color: '#00B14D',
    fontSize: 34,

  },
  //caixa aonde ficam os metodos de pagto
  pagamentoMetodoContainer: {
    marginBottom: 10,
    width:186,
    height:150,
    marginLeft:5,
    
  },
  pagamentoMetodoOption: {
    flex: 1,
    borderRadius:10,
    backgroundColor: "black",
  },
  pagamentoMetodoButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 7,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#4CAF50',
  },
  paymentIcon: {
    alignItems: 'center',
  },
  paymentIconText: {
    color: '#fff',
    fontSize: 12,
  },
  installmentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  installmentsLabel: {
    marginLeft: 10,
    color: '#fff',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft:100,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
    textAlign:"center",

  },
  
  submitButton: {
    marginTop:340,
    flex:1,
    alignContent:"flex-end",
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    paddingTop:11,
    alignItems: 'center',
    
    
  },
  buttonText2: {
    color:'black',
    paddingTop:5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    
  },
  selected2: {
    borderColor: '#4CAF50',
    backgroundColor: '#4CAF50',
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    // backgroundColor:(selecioneOpcao = 'PIX' ? '#00f540' : '#fff'}),
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 12,
  },
  button: {
    flexDirection:"row",
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width:"100%",
    height:50,
  },
  buttonText: {
   paddingTop:5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    
  },
});
