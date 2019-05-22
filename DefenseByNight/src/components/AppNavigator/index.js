import { createStackNavigator } from "react-navigation";

import Authentication from "../../containers/Authentification";
import Homepage from "../../containers/Homepage";
import Backstory from "../../containers/Backstory";

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
