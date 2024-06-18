import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, StatusBar, } from 'react-native';
import { useEffect,useState } from 'react';
import { useFonts } from 'expo-font';
import apiMockApi from '../../services/MockApi';


export default function Login({ navigation }) {
  let [] = useFonts({ 'Montserrat': require('./../../../assets/fonts/Montserrat-VariableFont_wght.ttf') });

  function AcessarCadastro() {
    navigation.navigate('Cadastro')
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

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
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
    height:188,

  },

  input: {
    color: '#ffffff',
    fontFamily:'Montserrat',
    fontWeight: '500',
    placeholderTextColor: '#dfdfdf',
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
    marginBottom:62,
  },

  alerta: {
    color: "#ff0000",
    fontSize: 12,
    marginTop: -10,
    marginBottom: -10,
  },

  button: {
    backgroundColor: "#00B14D",
    width: "88%",
    height:40,
    alignItems: "center",
    alignContent:"center",
    justifyContent:"center",
    marginTop: 145,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 30,
    fontFamily:'Montserrat',
    fontWeight: '600',
  },

  logo: {
    marginTop:20,
    width:300,
    height: 300,
  }
});