import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EatScreen = () => {
  return (
    <View style={styles.centered}>
      <Text style={styles.title}>Coming Soon.... </Text>
      <Text style={styles.subtitle}>In the mean time enjoy Uber Ride</Text>
    </View>
  )
}

export default EatScreen

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C8C8C8",
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  subtitle: {
    fontSize: 18,
    color: "#888",
  },
});