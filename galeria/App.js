import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample'; 

export default function App() {
  // Lista de imagens locais
  const images = [
    {
      id: 1,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (1).jpeg')
    },

    {
      id: 2,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (2).jpeg')
    },

    {
      id: 3,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (3).jpeg')
    },

    {
      id: 4,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (4).jpeg')
    },

    {
      id: 5,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (5).jpeg')
    },

    {
      id: 6,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (6).jpeg')
    },
    {
      id: 7,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (7).jpeg')
    },

    {
      id: 8,
      campoOrigem: 'local',
      URL: require('./DezImagens/download (8).jpeg')
    },

    {
      id: 9,
      campoOrigem: 'local',
      URL: require('./DezImagens/download.jpeg')
    },

    {
      id: 10,
      campoOrigem: 'local',
      URL: require('./DezImagens/images.jpeg')
    },
  ];

  const renderItem = ({ item }) => (
    <Image source={item.URL} style={styles.image} />
  );

  return (
    
    <View style={styles.container}>
    <Text>GALERIA</Text>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
    
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
});

// export default App;
