import { StyleSheet} from 'react-native';


const estilo = StyleSheet.create({
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

export default estilo