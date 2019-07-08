import React, { Component } from "react";
import { Text, ScrollView } from "react-native";

export default class Backstory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backstory: props.navigation.state.params
    };
  }

  render() {
    return (
      <ScrollView>
        <Text>{this.state.backstory}</Text>
      </ScrollView>
    );
  }
}
