import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';


const employees = [
  {id: 1, name: 'Erős István', city: 'Szeged'},
  {id: 2, name: 'Táncos Ernő', city: 'Szeged'},
  {id: 3, name: 'Szabó Tamás', city: 'Szeged'}  
];

const Item = ({name,city}) => (
  <View style={styles.item}>
    <Text style={styles.cell}>{name}</Text>
    <Text style={[styles.cell,styles.city]}>{city}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dolgozók</Text>
      <FlatList 
      data={employees}
      renderItem={({item}) => <Item name={item.name} city={item.city}/> }
      keyExtractor={item => item.id} 
      style={styles.list}
      />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
  },
  cell: {
    flex: 1,    
    fontSize: 28,
    padding: 3,    
  },
  city: {
    
  },
  item: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'gold',
    borderRadius: 5,
    padding: 5,
  },  
  list: {
    width: '90%',
  },
});
