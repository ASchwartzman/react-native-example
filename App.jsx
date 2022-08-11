import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddTodos from './components/AddTodos'

const todosInitial = [
  { text: 'buy milk', id: 1 },
  { text: 'workout', id: 2 },
  { text: 'cortar belão', id: 3 },
  { text: 'fazer barba', id: 4 },
]

export default function App() {
  const [todos, setTodos] = useState(todosInitial)

  const handlePressItem = (item) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != item.id))
    Alert.alert('Exclusão', `Todo ${item.id} excluido`, [{}])
  }

  const handleSubmitButton = (text) => {
    setTodos((prevTodos) => [{ text, id: Math.random() }, ...prevTodos])
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodos handleSubmitButton={handleSubmitButton} />
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.list}
            data={todos}
            keyExtractor={(todo) => todo.id}
            renderItem={({ item }) => (
              <ListItem item={item} handlePressItem={handlePressItem} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
})
