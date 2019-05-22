import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

import Images from "../../theme/Images";

const { width } = Dimensions.get("window");

type Props = {};
export default class Homepage extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 200,
            backgroundColor: "grey",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white" }}>
            Ebles le Croisé - Ventrue - 6ème Génération
          </Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            backgroundColor: "black",
            alignItems: "center"
          }}
        >
          <Image
            source={Images.profileImage}
            style={{
              position: "absolute",
              top: -40,
              height: 150,
              width: 150,
              borderRadius: 150 / 2
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  roundProfilePicture: {
    position: "absolute",
    top: -50,
    height: width / 3,
    width: width / 3,
    borderRadius: 150 / 2
  }
});
