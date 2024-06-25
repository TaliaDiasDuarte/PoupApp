import { StyleSheet} from 'react-native';


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


});

export default styles 
