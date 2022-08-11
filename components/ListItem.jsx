import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

function ListItem({ item, handlePressItem }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => handlePressItem(item)}>
      <MaterialIcons color='#333' name='delete' size={20} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}

export default ListItem

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
})
