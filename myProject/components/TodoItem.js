import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderWidth: 1,
    backgroundColor: "#bbb",
    borderStyle: "dashed",
    borderRadius: 10,
    margin: 10,
    width: 300,
  },
});

export default TodoItem;
