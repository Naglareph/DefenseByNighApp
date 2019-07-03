import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export default class Dot extends Component {
  render() {
    return <View style={styles.circleShapeView} />;
  }
}

const styles = StyleSheet.create({
  circleShapeView: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#bb0a1e"
  }
});
