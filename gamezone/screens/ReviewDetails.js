import { View, Text, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default ReviewDetails = ({ navigation }) => {
  //   const pressHandler = () => {
  //     navigation.goBack();// pops the screen from the stacks
  //   };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>{navigation.getParam("title")}</Text>
      <Text style={globalStyles.titleText}>{navigation.getParam("body")}</Text>
      <Text style={globalStyles.titleText}>{navigation.getParam("rating")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
