import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },
    { text: "go to gym", key: 2 },
    { text: "cook fodd", key: 3 },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
      </View>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <Text>{item.text}</Text>}
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
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
