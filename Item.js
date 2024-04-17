import { View, Text, StyleSheet, TouchableHighlight, FlatList } from 'react-native';
import Feature from './Feature';

export default function Item({ item, navigation }) {
  return(
    <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD"
      onPress={() => navigation.navigate('Details', {
        item: item
      })} >
      <View style={styles.item}>
        <Text style={styles.title}>{item.breed}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomColor: '#808080',
    borderBottomWidth: 2,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 30,
    paddingBottom: 10,
  },
  features: {
    justifyContent: 'space-between'
  }
})
