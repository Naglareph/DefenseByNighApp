import React, { Component } from "react";
import { Text, View } from "react-native";

import { BACKSTORY } from "../../fixtures/backstoryData";

type Props = {};
export default class Backstory extends Component<Props> {
  render() {
    return (
      <View>
        <Text>{BACKSTORY.historique}</Text>
      </View>
    );
  }
}
