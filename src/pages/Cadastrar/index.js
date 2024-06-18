import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import apiMockApi from '../../services/MockApi';

export default function Cadastrar({ navigation }) {

 let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });

 
  function AcessarLogin() {
    navigation.navigate('Login')
  }

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha1, setSenha1] = useState('');
  const [senha2, setSenha2] = useState('');



   function fnValidar() {
    const sNome = nome.trim();
    const sSobrenome = sobrenome.trim();
    const sEmail = email.trim();
    const sSenha1 = senha1.trim();
    const sSenha2 = senha2.trim();

    if (!sNome || !sSobrenome || !sEmail || !sSenha1 || sSenha1 !== sSenha2) {
      // Handle validation errors
      if (!sNome) alert("Informe um nome!");
      if (!sSobrenome) alert("Informe um sobrenome!");
      if (!sEmail) alert("Informe um email!");
      if (!sSenha1) alert("Informe uma senha!");
      if (sSenha1 !== sSenha2) alert("As senhas devem ser iguais!");
      return;
    }

    handleRegister();
  }

  function handleRegister() {
    const dados = {
      "nome": nome,
      "sobrenome": sobrenome,
      "email": email,
      "senha": senha1,
    };

    apiMockApi
      .post("USUARIOS", dados)
      .then((response) => {
        if (response.status === 201) {
          alert("Usuário cadastrado com sucesso!");
          setNome('');
          setSobrenome('');
          setEmail('');
          setSenha1('');
          setSenha2('');
        } else {
          alert("Erro ao cadastrar usuário!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Erro ao cadastrar usuário!");
      });
  }

  return (
    <View style={estilos.container}>

      <StatusBar></StatusBar>

      <Image source={require('./../../../imgs/logo.png')} style={estilos.logo} />

      <View style={estilos.campos}>

        <TextInput
          style={estilos.input}
          placeholder='Nome'
          placeholderTextColor={"#d3d3d3"}
          value={nome}
          onChangeText={(text) => setNome(text)} />

        <Text style={estilos.alerta}>
          {/* {isEmptyNome == true ? "Campo Vazio" : ""} */}
        </Text>

        <TextInput
          style={estilos.input}
          placeholder='Sobrenome'
          placeholderTextColor={"#d3d3d3"}
          value={sobrenome}
          onChangeText={(text) => setSobrenome(text)} />

        <Text style={estilos.alerta}>
          {/* {isEmptySobrenome == true ? "Campo Vazio" : ""} */}
        </Text>

        <TextInput
          style={estilos.input}
          keyboardType="email-address"
          placeholder='Email'
          placeholderTextColor={"#d3d3d3"}
          value={email}
          onChangeText={(text) => setEmail(text)} />

        <Text style={estilos.alerta}>
          {/* {isEmptyEmail == true ? "Campo Vazio" : ""} */}
        </Text>

        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor={"#d3d3d3"}
          value={senha1}
          onChangeText={(text) => setSenha1(text)} />

        <Text style={estilos.alerta}>
          {/* {isEmptySenha1 == true ? "Campo Vazio" : ""} */}
        </Text>

        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder='Confirmar Senha'
          placeholderTextColor={"#d3d3d3"}
          value={senha2}
          onChangeText={(text) => setSenha2(text)} />

        <Text style={estilos.alerta}>
          {/* {isEmptySenha2 == true ? "Campo Vazio" : ""} */}
        </Text>

        <View style={{alignItems: 'rigth',
         width:'89%',marginTop:-2}}>
          <TouchableOpacity>
          <Text style={estilos.texto1}>Esqueceu a senha?</Text>
        </TouchableOpacity>
          </View>

      </View>

      <Text style={estilos.texto1}>
        Já tem uma conta?
      </Text>

      <TouchableOpacity
        onPress={AcessarLogin}
      >
        <Text style={estilos.texto2}>
          Logar agora!
        </Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={estilos.button}
        onPress={fnValidar}
      >
        <Text style={{fontFamily:'Montserrat',
          fontWeight: '700',}}>
          CADASTRAR
        </Text>
      </TouchableOpacity>



    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },

  campos: {
    backgroundColor: "#030303",
    alignItems: 'center',
    justifyContent: 'center',
    gap: 23,
    width: "88%",
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    height:380,
  },

  input: {
    color: '#ffffff',
    fontFamily:'Montserrat',
    fontWeight: '500',
    placeholderTextColor: '#d3d3d3',
    backgroundColor: '#1E1E1E',
    width: "90%",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 5,
    height:35,
  },

  texto1: {
    color: "#00B14D",
    fontSize: 12,
    textAlign: 'right',
  },

  texto2: {
    color: "#fff",
    fontSize: 15,
  },

  alerta: {
    color: "#ff0000",
    fontSize: 12,
    marginTop: -15,
    marginBottom: -15,
  },

  button: {
    backgroundColor: "#00B14D",
    width: "88%",
    height:40,
    alignItems: "center",
    alignContent:"center",
    justifyContent:"center",
    marginTop: 14,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 9,
    fontFamily:'Montserrat',
    fontWeight: '600',
  },

  logo: {
    width:300,
    height: 300,
  }
});
