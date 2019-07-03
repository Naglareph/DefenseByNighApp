import { createStackNavigator } from "react-navigation";

import Authentication from "../Authentification";
import Homepage from "../../features/Homepage";
import Backstory from "../../features/Backstory";

const AppNavigator = createStackNavigator({
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      title: "Authentification",
      header: null
    }
  },
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      title: "Homepage",
      header: null
    }
  },
  Backstory: {
    screen: Backstory,
    navigationOptions: {
      title: "Historique de votre personnage"
    }
  }
});

export default AppNavigator;
