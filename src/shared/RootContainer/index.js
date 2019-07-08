import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { View } from "react-native";

// -- Connectivity --
import NetInfo from "@react-native-community/netinfo";
import DropdownAlert from "react-native-dropdownalert";

// Components
import MyStatusBar from "../MyStatusBar";

// -- Splash Screen --
import SplashScreen from "react-native-splash-screen";

// -- Navigation --
import AppNavigator from "../AppNavigator";

const AppContainer = createAppContainer(AppNavigator);

export default class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: true
    };
  }

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
      this.dropdown.alertWithType("success", "", "Connecté");
    } else {
      this.dropdown.alertWithType(
        "error",
        "Error",
        "Vous semblez hors ligne, les fonctionnalités peuvent être limitées"
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyStatusBar style={{ barStyle: "light-content" }} />
        <AppContainer />
        <DropdownAlert
          closeInterval={4000}
          ref={ref => (this.dropdown = ref)}
        />
      </View>
    );
  }
}
