import React, { Component } from "react";
import { Text, View, Image, Alert } from "react-native";

import { Button, Card, Icon } from "react-native-elements";

// -- Navigation --
import { routes } from "../../shared/AppNavigator/routes";

// -- Styling --
import styles from "./style";

export default class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }

  handleCharacterNavigation = () => {
    alert("Not implemented yet, please be patient. :)");
  };

  handleBackstorySnip(str) {
    return str.substring(0, 97) + "...";
  }

  render() {
    const {
      name,
      characterPic,
      clan,
      generation,
      status,
      backstory
    } = this.props.character;

    let backstorySnip = this.handleBackstorySnip(backstory);

    return (
      <Card
        title={name}
        containerStyle={styles.cardContainer}
        titleStyle={styles.cardTitleText}
      >
        <View style={styles.cardUpperContainer}>
          <Image
            source={{ uri: characterPic }}
            style={styles.roundCardPicture}
          />
          <View style={styles.leftTextCardUpperContainer}>
            <Text style={styles.leftCardUpperText}>
              {status} {clan}
              {/* @todo ajouter ici la gestion du statut et du poste du personnage */}
            </Text>
            <Text style={styles.leftCardUpperText}>
              {generation}ème Génération
            </Text>
          </View>
        </View>
        <Text style={styles.backgroundSnipText}>{backstorySnip}</Text>
        <Button
          icon={<Icon type="material" name="accessibility" color="#ffffff" />}
          backgroundColor="#bb0a1e"
          buttonStyle={styles.cardButton}
          title="Fiche du personnage"
          onPress={this.handleCharacterNavigation}
        />
      </Card>
    );
  }
}
