import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

// Components
import Dot from "../../shared/Dot";

export default class Disciplines extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { disciplines } = this.props;
    let filteredArray = [];

    let j = 0;
    for (var key in disciplines) {
      if (disciplines[key] > 0 && key != "created" && key != "updated") {
        filteredArray.push({ name: key, value: disciplines[key], dots: [] });
        let dots = [];
        for (let i = 0; i != disciplines[key]; i++) {
          filteredArray[j]["dots"].push(<Dot key={i} />);
        }
        j++;
      }
    }

    var firstColumn, secondColumn, thirdColumn;

    var m = Math.ceil(filteredArray.length / 3);
    var n = Math.ceil((2 * filteredArray.length) / 3);

    firstColumn = filteredArray.slice(0, m);
    secondColumn = filteredArray.slice(m, n);
    thirdColumn = filteredArray.slice(n, filteredArray.length);

    return (
      <View style={styles.skillContainer}>
        {/* Premiere colonne des disciplines */}
        <View style={styles.item}>
          {firstColumn.map((u, i) => {
            return (
              <View key={i}>
                <Text style={styles.attributeText}>{u.name}</Text>
                <View style={styles.attribute}>{u.dots}</View>
              </View>
            );
          })}
        </View>

        {/* Deuxième colonne des disicplines */}
        <View style={styles.item}>
          {secondColumn.map((u, i) => {
            return (
              <View key={i}>
                <Text style={styles.attributeText}>{u.name}</Text>
                <View style={styles.attribute}>{u.dots}</View>
              </View>
            );
          })}
        </View>

        {/* Troisième colonne des disicplines */}
        <View style={styles.item}>
          {thirdColumn.map((u, i) => {
            return (
              <View key={i}>
                <Text style={styles.attributeText}>{u.name}</Text>
                <View style={styles.attribute}>{u.dots}</View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: "33%"
  },
  middleItem: {
    width: "34%"
  },
  attribute: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  skillContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    backgroundColor: "black",
    marginBottom: 10,
    marginTop: 60
  },
  attributeText: {
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 12,
    marginBottom: 5
  },
  skills: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  skillText: {
    color: "white",
    textAlign: "center"
  },
  dots: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dotText: {
    color: "white",
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 12,
    marginBottom: 5
  }
});
