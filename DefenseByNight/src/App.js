import React, { Component } from "react";
import { createAppContainer } from "react-navigation";

import AppNavigator from "./features/AppNavigator";
import SplashScreen from "react-native-splash-screen";

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppContainer />;
  }
}
