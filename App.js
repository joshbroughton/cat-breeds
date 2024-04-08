import { FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { useState } from 'react';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import Item from './Item';

import { cats, dogs } from './breeds';

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <SegmentedControl
        values={['Cats', 'Dogs']}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      ></SegmentedControl>
      <FlatList
        data={selectedIndex === 0 ? cats : dogs}
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
