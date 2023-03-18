import { Text, View, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: "coral",
    width: 400,
  },
  title: {
    paddingTop: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default Header;
