import { FlatList, SafeAreaView, StyleSheet, StatusBar, TextInput } from 'react-native';
import { useState } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import Item from './Item';

import { cats, dogs } from './breeds';
import { filterByBreed } from './util';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCats = filterByBreed(cats, searchTerm);
  const filteredDogs = filterByBreed(dogs, searchTerm);

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        values={['Cats', 'Dogs']}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      <TextInput
        onChangeText={setSearchTerm}
        style={styles.searchBar}
        value={searchTerm}
        placeholder="Search by breed!"
      />
      <FlatList
        data={selectedIndex === 0 ? filteredCats : filteredDogs}
        renderItem={({ item, index }) => {
          return <Item item={item} index={index} key={item.breed} />
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
  searchBar: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
