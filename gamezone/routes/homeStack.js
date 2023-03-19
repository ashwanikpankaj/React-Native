import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, reactAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "GameZone",
      //  headerStyle: { backgroundColor: "coral" }, // if we want to override the default header style we can do it from here
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review Details",
      // headerStyle: { backgroundColor: "#eee" },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: { backgroundColor: "#333", height: 60 } }, /// this apply to the all the headers of screen stack
    headerTintColor:'gray'// helps in getting the header color
  },
});

export default createAppContainer(HomeStack);
