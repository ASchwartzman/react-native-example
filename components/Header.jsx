import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo's</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'purple',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
