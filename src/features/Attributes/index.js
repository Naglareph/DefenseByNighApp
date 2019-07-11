import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

// Components
import Dot from "../../shared/Dot";

export default class Attributes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      attr_men,
      attr_men_bonus,
      attr_phy,
      attr_phy_bonus,
      attr_soc,
      attr_soc_bonus
    } = this.props;

    // Here we stock the dots dynamically for all physical attributes
    var physicalAttr = [];
    var physicalAttrBonus = [];
    for (let i = 0; i < attr_phy; i++) {
      if (i == 5 && attr_phy > 5) {
        physicalAttr.push(<Text key={attr_phy + 1}> </Text>);
      }
      physicalAttr.push(<Dot key={i} />);
    }
    for (let i = 0; i < attr_phy_bonus; i++) {
      physicalAttrBonus.push(<Dot key={i} />);
    }
    // Here we stock the dots dynamically for all mental attributes
    var mentalAttr = [];
    var mentalAttrBonus = [];
    for (let i = 0; i < attr_men; i++) {
      if (i == 5 && attr_men > 5) {
        mentalAttr.push(<Text key={attr_men + 1}> </Text>);
      }
      mentalAttr.push(<Dot key={i} />);
    }
    for (let i = 0; i < attr_men_bonus; i++) {
      mentalAttrBonus.push(<Dot key={i} />);
    }
    // Here we stock the dots dynamically for all social attributes
    var socialAttr = [];
    var socialAttrBonus = [];
    for (let i = 0; i < attr_soc; i++) {
      if (i == 5 && attr_soc > 5) {
        socialAttr.push(<Text key={attr_soc + 1}> </Text>);
      }
      socialAttr.push(<Dot key={i} />);
    }
    for (let i = 0; i < attr_soc_bonus; i++) {
      socialAttrBonus.push(<Dot key={i} />);
    }

    return (
      <View style={styles.attributeContainer}>
        <View style={styles.item}>
          <Text style={styles.attributeText}>Physique</Text>
          <View style={styles.attribute}>{physicalAttr}</View>
          {this.props.attr_phy_bonus > 0 && (
            <Text style={styles.attributeText}>Bonus</Text>
          )}
          {this.props.attr_phy_bonus > 0 && (
            <View style={styles.attribute}>{physicalAttrBonus}</View>
          )}
        </View>
        <View style={styles.item}>
          <Text style={styles.attributeText}>Social</Text>
          <View style={styles.attribute}>{socialAttr}</View>
          {this.props.attr_soc_bonus > 0 && (
            <Text style={styles.attributeText}>Bonus</Text>
          )}
          {this.props.attr_soc_bonus > 0 && (
            <View style={styles.attribute}>{socialAttrBonus}</View>
          )}
        </View>
        <View style={styles.item}>
          <Text style={styles.attributeText}>Mental</Text>
          <View style={styles.attribute}>{mentalAttr}</View>
          {this.props.attr_men_bonus > 0 && (
            <Text style={styles.attributeText}>Bonus</Text>
          )}
          {this.props.attr_men_bonus > 0 && (
            <View style={styles.attribute}>{mentalAttrBonus}</View>
          )}
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
  attributeContainer: {
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
  }
});
