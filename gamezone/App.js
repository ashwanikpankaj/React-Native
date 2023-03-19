import { useState } from "react";
import * as Font from "expo-font";
import Home from "./screens/Home";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";

const getFonts = () =>
  Font.loadAsync({
    "nonito-regular": require("./assets/Nunito-Regular.ttf"),
    "nonito-bold": require("./assets/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontLoaded, setFondLoaded] = useState(false);

  if (fontLoaded) return <Navigator />;
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFondLoaded(true)}
        onError={console.warn}
      />
    );
  }
}
