import React, { Component } from "react";
import { Text, View } from "react-native";

type Props = {};
export default class Backstory extends Component<Props> {
  render() {
    return (
      <View>
        <Text>
          Ici on pourra consulter l'intégralité de son historique de personnage.
        </Text>
      </View>
    );
  }
}
