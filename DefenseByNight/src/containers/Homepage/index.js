import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

import Images from "../../theme/Images";

const { width } = Dimensions.get("window");

type Props = {};
export default class Homepage extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.upperContainer}>
          <Text style={{ color: "white" }}>
            Ebles le Croisé - Ventrue - 6ème Génération
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <Image
            source={Images.profileImage}
            style={styles.roundProfilePicture}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    height: 200,
    backgroundColor: "grey",
    alignContent: "center",
    justifyContent: "center"
  },
  mainContainer: {
    flexGrow: 1,
    backgroundColor: "black",
    alignItems: "center"
  },
  roundProfilePicture: {
    position: "absolute",
    top: -150 / 2,
    height: width / 3,
    width: width / 3,
    borderRadius: width / 2
  }
});
