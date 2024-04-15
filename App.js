import { FlatList, SafeAreaView, StyleSheet, StatusBar, TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

import Item from './Item';

import { cats, dogs } from './breeds';
import { filterByBreed } from './util';

function HomeScreen({ navigation }) {
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
        renderItem={({ item }) => {
          return <Item item={item} key={item.breed} navigation={navigation} />
        }}
        keyExtractor={ item => item.breed }
      ></FlatList>
    </SafeAreaView>
  );
}

function DetailsScreen() {
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
   </View>
  );
 }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
     </Stack.Navigator>
    </NavigationContainer>
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
