
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, TextInput, Switch, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'
import MaskInput, { Masks } from 'react-native-mask-input';
import apiMockApi from '../../services/MockApi';
import  styles from './style';


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

  //o bloco abaixo enviar o valor para api sem o cifrao de dh
  const [rawValor, setRawValor] = useState(''); // valor do input com mascara

  const onChangeText = (maskedValue, unmaskedValue) => {
    setRawValor(maskedValue); // atualizada valor display

    // Extract numeric value without mask and comma
    const numericValue = (maskedValue.replace(/R\$|\$/g, "")); // Remove non-numeric characters, including R$ and period
    console.log('Extracted float value:', numericValue);
    setValor(numericValue);
  };



  //envia valores para api
  const handleSubmit = () => {
    // Processar dados do gasto
    console.log('Dados do gasto:', {
      titulo,
      descricao,
      valor: parseFloat(valor).toFixed(2),
      
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
{/* container gastos */}
      <View style={{ flexDirection: 'row', }}>
        <TouchableOpacity onPress={AcessarInicio} >
          <MaterialIcons
            name={'arrow-back-ios'}
            size={30}
            color={'#FFFFFF'}
            style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 20, }}
          ></MaterialIcons>
        </TouchableOpacity>

        <Text style={styles.titulo}>GASTOS</Text>

      </View>

{/* input titulo */}
      <TextInput
        style={styles.input}
        placeholder="Título"
        placeholderTextColor={"#ffffff"}
        value={titulo}
        onChangeText={setTitulo}
      />


  {/*input descricao */}
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        placeholderTextColor={"#ffffff"}
        value={descricao}
        onChangeText={setDescricao}
      />


      {/* caixa que contem a opçao de pix e valor gasto */}
      <View style={{ flexDirection: 'row', height: 150, width: "100%", gap: 5 }}>

        {/* container que conten digitar valor  */}
        <View style={{ flexDirection: 'column', width: "49%", }}>

          <View style={{ flexDirection: 'row', }}>

            <View style={styles.valorContainer}>
              <MaskInput
            style={styles.valorInput}
                value={rawValor}
                onChangeText={onChangeText}
                mask={Masks.BRL_CURRENCY} // Assuming you have BRL_CURRENCY mask defined in Masks
                placeholderTextColor={"#4CAF50"}
                keyboardType="numeric"
              />

            </View>
          </View>
          <View style={{ backgroundColor: 'black', height: 30, marginTop: -10, borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Quanto foi gasto?</Text>
          </View>

        </View>


{/* opcoes de pagto container */}
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
            style={{ justifyContent: 'center', alignItems: 'center', }}
          ></MaterialIcons>
          <Text style={styles.buttonText}>A vista</Text>
        </TouchableOpacity>
      </View>



      <TouchableOpacity style={styles.uploadButton} onPress={() => handleImageUpload()}>

        <Text style={styles.uploadButtonText}>Subir arquivo/foto</Text>
        <MaterialIcons
          name={'backup'}
          size={30}
          color={'#4CAF50'}
          style={{ justifyContent: 'center', alignItems: 'center', }}
        ></MaterialIcons>
      </TouchableOpacity>



      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText2}>ADICIONAR GASTO</Text>
      </TouchableOpacity>
    </View>
  );
}

