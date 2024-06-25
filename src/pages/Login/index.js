import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useEffect,useState } from 'react';
import { useFonts } from 'expo-font';
import apiMockApi from '../../services/MockApi';
import  estilos from './style';

export default function Login({ navigation }) {
  let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });

  function AcessarCadastro() {
    navigation.navigate('Cadastrar')
  }

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Adicionado para indicador de carregamento
  const [loginError, setLoginError] = useState(''); // Adicionado para mensagens de erro
  const [passwordError, setPasswordError] = useState(''); // Adicionado para mensagens de erro



  useEffect(() => {
    setLoginError(''); // Limpar mensagens de erro ao montar o componente
    setPasswordError('');
  }, []); // Executar apenas uma vez quando o componente é montado

  const fnValidar = async () => {
    setIsLoading(true); // Definir indicador de carregamento durante a busca de dados
    setLoginError(''); // Limpar mensagens de erro antes da chamada da API
    setPasswordError('');

    if (login.trim() === '') {
      setLoginError('Informe um email!');
      setIsLoading(false);
      return;
    }

    if (senha.trim() === '') {
      setPasswordError('Informe uma senha!');
      setIsLoading(false);
      return;
    }

    try {
      const response = await apiMockApi.get('USUARIOS');

      if (response.status === 200) {
        // Verifique se as credenciais do usuário correspondem a qualquer usuário da API
        const matchingUser = response.data.find(user => user.email === login && user.senha === senha);

        if (matchingUser) {
          console.log('Login bem sucedido!');
          navigation.navigate('Inicio'); // Ou sua tela desejada após o login bem-sucedido
        } else {
          setLoginError('Email ou senha incorretos.');
        }
      } else {
        console.error('Erro ao buscar usuários:', response.data.message);
        setLoginError('Erro ao efetuar login. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro de login:', error);
      setLoginError('Erro ao efetuar login. Tente novamente mais tarde.');
    } finally {
      setIsLoading(false); // Limpar indicador de carregamento após a chamada da API
    }
  };


  return (
    <View style={estilos.container}>

      <StatusBar></StatusBar>

      <Image source={require('./../../../imgs/logo.png')} style={estilos.logo} />

      <View style={estilos.campos}>

        <TextInput
          style={estilos.input}
          keyboardType="email-address"
          placeholder='E-mail'
          placeholderTextColor={"#d3d3d3"}
          value={login}
          onChangeText={(text) => setLogin(text)} />

        <Text style={estilos.alerta}>
          {/* {isEmptyLogin == true ? "Campo Vazio" : ""} */}
        </Text>


        <TextInput
          style={estilos.input}
          secureTextEntry={true}
          placeholder='Senha'
          placeholderTextColor={"#d3d3d3"}
          value={senha}
          onChangeText={(text) => setSenha(text)} />

        <Text style={estilos.alerta}>
          {/* {isEmptySenha == true ? "Campo Vazio" : ""} */}
        </Text>

        <View style={{alignItems: 'rigth',
    width:'89%',marginTop:-17}}>
          <TouchableOpacity>
          <Text style={estilos.texto1}>Esqueceu a senha?</Text>
        </TouchableOpacity>
          </View>
      

      </View>

     

      <Text style={estilos.texto1}>
        Não tem uma conta?
      </Text>

      <TouchableOpacity
        onPress={AcessarCadastro}>
        <Text style={estilos.texto2}>
          Criar agora!
        </Text>
        
      </TouchableOpacity>


      <TouchableOpacity 
      style={estilos.button}
      onPress={fnValidar}
      >
        <Text style={{fontFamily:'Montserrat',
          fontWeight: '700',}}>
          LOGIN
        </Text>
      </TouchableOpacity>

    </View>
  );
}

