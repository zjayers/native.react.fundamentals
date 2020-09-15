// - Imports
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import { routes } from "./routes/routes";

// - Navigation Setup
const navigator = createStackNavigator(
  { Home: HomeScreen, ...routes },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Fundamentals",
    },
  }
);

// - Exports
export default createAppContainer(navigator);
