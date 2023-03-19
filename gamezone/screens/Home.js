import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global.js";
import { useState } from "react";

export default Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: "Titan Watch", body: "Lorem ipsum", key: 1, rating: 5 },
    { title: "Redmi Watch", body: "Lorem ipsum", key: 2, rating: 4 },
    { title: "One Plus Watch", body: "Lorem ipsum", key: 3, rating: 3 },
  ]);

  const pressHandler = (item)=> () => {
    navigation.navigate("ReviewDetails",item);
    // navigation.push('ReviewDetails')// when need to check the stack of navigation and need of the control for it
  };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={pressHandler(item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
