import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function AddTodos({ handleSubmitButton }) {
  const [text, setText] = useState('')

  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder='Add new todo...'
        style={styles.input}
        onChangeText={(val) => setText(val)}
      />
      <Button
        title='Add Todo'
        color='purple'
        onPress={() => handleSubmitButton(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    paddingBottom: 20,
  },
  input: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
  },
})
