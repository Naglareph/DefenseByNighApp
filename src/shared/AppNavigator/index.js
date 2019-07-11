import { createStackNavigator } from "react-navigation";

import Authentication from "../../features/Authentification";
import Homepage from "../../features/Homepage";
import Backstory from "../../features/Backstory";
import CharacterSheet from "../../features/CharacterSheet";

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
  },
  CharacterSheet: {
    screen: CharacterSheet
  }
});

export default AppNavigator;
