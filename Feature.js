import { StyleSheet, View, Text } from "react-native"

export default function Feature({feature, stars}) {
  return(
    <View style={styles.container}>
      <Text feature={feature} style={styles.features}>{`${feature}`}</Text>
      <Text>{"⭐".repeat(stars)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  features: {
    justifyContent: 'space-between'
  }
})

