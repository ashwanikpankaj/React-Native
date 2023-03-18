import { useState } from "react";
import { StyleSheet, Text, View, FlatList,TouchableWithoutFeedback,Keyboard } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: 1 },//if we add key for it is used internally for the FlatList
    { text: "go to gym", key: 2 },
    { text: "cook fodd", key: 3 },
    { text: "play football", key: 4 },
  ]);

  const pressHandler = (key) => {
    const filterTodos = todos.filter((item) => item.key !== key);
    setTodos(filterTodos);
  };

  const handleAddTodo = (text)=>{
    const getArrLength = todos.length
    console.log(todos)
    setTodos([...todos,{key:getArrLength+1,text}])
  }

  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo handleAddTodo={handleAddTodo} />
        </View>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem
                item={item.text}
                pressHandler={() => pressHandler(item.key)}
              />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
