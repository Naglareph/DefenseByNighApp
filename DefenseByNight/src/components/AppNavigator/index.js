import { createStackNavigator } from "react-navigation";
import Authentication from "../../containers/Authentification";

const AppNavigator = createStackNavigator({
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      title: "Authentification",
      header: null
    }
  }
});

export default AppNavigator;
