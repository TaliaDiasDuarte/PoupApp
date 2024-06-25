import { StyleSheet} from 'react-native';


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
    marginTop: 20,
    fontFamily: 'Montserrat',
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
    borderRadius: 10,
    width: "100%",

  },
  valorSymbol: {
    height: 120,
    paddingTop: 50,
    backgroundColor: "black",
    fontSize: 28,
    color: '#00B14D',
    textAlign: "center",
    borderTopLeftRadius: 7,
    borderRadius: 10,
  },
  valorInput: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
    width: "49%",
    height: 150,
    marginLeft: 5,

  },
  pagamentoMetodoOption: {
    flex: 1,
    borderRadius: 10,
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
    width: '100%'
  },
  installmentsLabel: {
    marginLeft: 10,
    color: '#fff',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 98,
    width: "100%",
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
    textAlign: "center",

  },

  submitButton: {
    marginTop: 250,
    justifyContent: 'flex-end',
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    paddingTop: 11,
    alignItems: 'center',


  },
  buttonText2: {
    color: 'black',
    paddingTop: 5,
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
    flexDirection: "row",
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: "100%",
    height: 50,
  },
  buttonText: {
    paddingTop: 5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,

  },

});

export default styles 
