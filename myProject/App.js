import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "go to gym", key: 2 },
    { text: "cook fodd", key: 3 },
  ]);

  const pressHandler = (key) => {
    const filterTodos = todos.filter((item) => item.key !== key);
    setTodos(filterTodos)
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
      </View>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item.text} pressHandler={() => pressHandler(item.key)} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
