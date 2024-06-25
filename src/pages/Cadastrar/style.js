import { StyleSheet} from 'react-native';


const estilo = StyleSheet.create({
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
  },



});

export default estilo