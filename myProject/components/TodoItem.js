import { Text, TouchableOpacity, StyleSheet,View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.item}>
        <MaterialIcons  name="delete" color="red" size={20} />
        <Text style={styles.itemText}>{item}</Text>
      </View>
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
    flexDirection:'row'
  },
  itemText:{
    marginLeft:10
  }
});

export default TodoItem;
