import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useState } from "react";

const AddTodo = ({ handleAddTodo }) => {
  const [text, setText] = useState("");

  const onChange = (value) => {
    setText(value);
  };

  const pressHandler = () => {
    if(text.length > 3){
    handleAddTodo(text);
    setText("");
    }
    else{
        Alert.alert('OOP!','Character must be three character long',[{text:'Understood',onPress:()=>console.log('pressed')}])
    }

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
