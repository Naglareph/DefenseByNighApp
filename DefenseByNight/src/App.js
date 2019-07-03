import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { View } from "react-native";

// -- Connectivity --
import NetInfo from "@react-native-community/netinfo";
import DropdownAlert from "react-native-dropdownalert";

// -- Splash Screen --
import SplashScreen from "react-native-splash-screen";

// -- Navigation --
import AppNavigator from "./shared/AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    SplashScreen.hide();
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.handleConnectivityChange
    );
  }

  handleConnectivityChange = isConnected => {
    if (isConnected) {
      this.dropdown.alertWithType("success", "Success", "Now online");
    } else {
      this.dropdown.alertWithType(
        "error",
        "Error",
        "Vous êtes hors ligne, les fonctionnalités peuvent être limitées"
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
        <DropdownAlert closeInterval={0} ref={ref => (this.dropdown = ref)} />
      </View>
    );
  }
}
