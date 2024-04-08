import { View, Text, StyleSheet } from 'react-native';

export default function Item({ item, index }) {
  return(
    <View style={styles.item}>
      <Text style={styles.title}>{item.breed}</Text>
      {Object.keys(item).map((key => {
        if (key === 'breed') {
          return
        } else {
          return(
            <View style={styles.container}>
              <Text key={key} style={styles.features}>{`${key}`}</Text>
              <Text>{"⭐".repeat(item[key])}</Text>
            </View>
          )
        }
      }))}
    </View>
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
