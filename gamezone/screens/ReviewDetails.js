import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();// pops the screen from the stacks
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Review Details</Text>
      <Button title="Back to Home screen" onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({});
