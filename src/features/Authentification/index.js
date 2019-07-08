import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, ButtonGroup } from "react-native-elements";

import { routes } from "../../shared/AppNavigator/routes";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      selectedIndex: 0
    };
    this.buttons = ["Sign Up", "Sign In"];
  }

  updateIndex = () => {
    // If selectedIndex was 0, make it 1.  If it was 1, make it 0 (btw that's where a spachip operator would do great <=> )
    const newIndex = this.state.selectedIndex === 0 ? 1 : 0;
    this.setState({ selectedIndex: newIndex });
  };

  handleSignIn = () => {
    const { email, password } = this.state;
    this.props.navigation.navigate(routes.Homepage);
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={this.state.selectedIndex}
          buttons={this.buttons}
          buttonStyle={{ backgroundColor: "#bb0a1e" }}
          textStyle={{ color: "white" }}
          selectedButtonStyle={{ backgroundColor: "#bb2e0a" }}
          containerStyle={{ backgroundColor: "black" }}
        />
        <Text style={styles.welcome}>
          Welcome to the Defense by Night Application
        </Text>
        <Text style={styles.instructions}>
          For the moment it's a simple app serving as a POC.
        </Text>

        {this.state.selectedIndex === 0 ? (
          <View style={styles.form}>
            <Input
              label="Email"
              labelStyle={styles.white}
              leftIcon={{ type: "font-awesome", name: "envelope" }}
              onChangeText={value => this.setState({ email: value })}
              placeholder="my@email.com"
              placeholderTextColor="white"
              style={styles.white}
            />
            <Input
              label="Password"
              labelStyle={styles.white}
              leftIcon={{ type: "font-awesome", name: "lock" }}
              onChangeText={value => this.setState({ password: value })}
              placeholder="p@ssw0rd123"
              placeholderTextColor="white"
              secureTextEntry
              style={styles.white}
            />
            <Input
              label="Confirm Password"
              labelStyle={styles.white}
              leftIcon={{ type: "font-awesome", name: "lock" }}
              onChangeText={value => this.setState({ confirmPassword: value })}
              placeholder="p@ssw0rd123"
              placeholderTextColor="white"
              secureTextEntry
              style={styles.white}
            />
          </View>
        ) : (
          <View style={styles.form}>
            <Input
              label="Email"
              labelStyle={styles.white}
              leftIcon={{ type: "font-awesome", name: "envelope" }}
              onChangeText={value => this.setState({ email: value })}
              placeholder="my@email.com"
              placeholderTextColor="white"
              style={styles.white}
            />
            <Input
              label="Password"
              labelStyle={styles.white}
              leftIcon={{ type: "font-awesome", name: "lock" }}
              onChangeText={value => this.setState({ password: value })}
              placeholder="p@ssw0rd123"
              placeholderTextColor="white"
              secureTextEntry
              style={styles.white}
            />
          </View>
        )}
        <Button
          title="Submit"
          onPress={this.handleSignIn}
          buttonStyle={{ backgroundColor: "#bb0a1e" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  },
  instructions: {
    textAlign: "center",
    color: "white",
    marginBottom: 5
  },
  white: {
    color: "white"
  }
});
