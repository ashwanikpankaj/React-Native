import { View, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = useState("");

  const onChange = (value) => {
    setText(value);
  };

  const pressHandler = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <View>
      <TextInput
        placeholder="Add todo..."
        style={styles.textInput}
        onChangeText={onChange}
        defaultValue={text}
      />
      <Button
        title="Add Todo"
        style={styles.button}
        onPress={pressHandler}
        disabled={!text}
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 8,
    width: 400,
  },
  button: {
    marginTop: 10,
  },
});

export default AddTodo;
