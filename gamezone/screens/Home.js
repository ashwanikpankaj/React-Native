import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global.js";

export default Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails");
    // navigation.push('ReviewDetails')// when need to check the stack of navigation and need of the control for it
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home</Text>
      <Button title="Go to Review Details" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});
