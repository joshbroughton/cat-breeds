import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

import Item from './Item';

import { cats } from './breeds';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cats}
        renderItem={({ item, index }) => {
          return <Item item={item} index={index} />
        }}
        keyExtractor={ item => item.breed }
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
