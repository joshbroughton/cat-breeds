import { FlatList, SafeAreaView, StyleSheet, StatusBar, TextInput, View, Text } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

import Item from './Item';
import Feature from './Feature';

import { cats, dogs } from './breeds';
import { filterByBreed } from './util';

function HomeScreen({ navigation, route }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCats = filterByBreed(cats, searchTerm);
  const filteredDogs = filterByBreed(dogs, searchTerm);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setSearchTerm}
        style={styles.searchBar}
        value={searchTerm}
        placeholder="Search by breed!"
      />
      <FlatList
        data={route.params.animal === 'dog' ? filteredDogs : filteredCats}
        renderItem={({ item }) => {
          return <Item item={item} key={item.breed} navigation={navigation} />
        }}
        keyExtractor={ item => item.breed }
      ></FlatList>
    </SafeAreaView>
  );
}

function DetailsScreen({ route }) {
  const { item } = route.params;
  return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={styles.title}>{item.breed}</Text>
    <FlatList
      data={Object.keys(item)}
      renderItem={(obj) => {
        const feature = obj.item
        if (feature === 'breed') {
          return
        } else {
          return(<Feature feature={feature} stars={item[feature]} />)
        }
    }}/>
   </View>
  );
 }

 const DogStack = createNativeStackNavigator();
 const CatStack = createNativeStackNavigator();

 function DogStackScreen() {
  return (
    <DogStack.Navigator>
      <DogStack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{animal: 'dog'}}
        options={{
          headerShown: false
        }}
      />
      <DogStack.Screen name="Details" component={DetailsScreen} />
    </DogStack.Navigator>
   );
 }

 function CatStackScreen() {
  return (
    <CatStack.Navigator>
      <CatStack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{animal: 'Cat'}}
        options={{
          headerShown: false
        }}
      />
      <CatStack.Screen name="Details" component={DetailsScreen} />
    </CatStack.Navigator>
   );
 }

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dogs"
          component={DogStackScreen}
          options={{
            tabBarIcon: ({ size }) => (
              <Ionicons name='paw-outline' size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cats"
          component={CatStackScreen}
          options={{
            tabBarIcon: ({ size }) => (
              <Ionicons name='logo-octocat' size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  features: {
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
    paddingBottom: 10,
  },
});
