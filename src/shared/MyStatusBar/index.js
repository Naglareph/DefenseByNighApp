"use strict";
import React, { Component } from "react";
import { View, StyleSheet, StatusBar } from "react-native";

class MyStatusBar extends Component {
  render() {
    return (
      <View style={[styles.myStatusBar, this.props.style || {}]}>
        <StatusBar style={this.props.style} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myStatusBar: {
    backgroundColor: "white"
  }
});

module.exports = MyStatusBar;
