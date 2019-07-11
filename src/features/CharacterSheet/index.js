import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";

import { Button } from "react-native-elements";
import { routes } from "../../shared/AppNavigator/routes";

// Components
import Dot from "../../shared/Dot";
import Attributes from "../Attributes";
import Disciplines from "../Disciplines";

// -- Styling --
import styles from "./style";

export default class CharacterSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: props.navigation.state.params
    };
  }

  handleBackstory = () => {
    this.props.navigation.navigate(
      routes.Backstory,
      this.state.character.backstory
    );
  };

  render() {
    const {
      characterPic,
      generation,
      name,
      clan,
      attr_men,
      attr_men_bonus,
      attr_phy,
      attr_phy_bonus,
      attr_soc,
      attr_soc_bonus,
      disciplines
    } = this.state.character;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.screenStyle}>
          <View style={styles.upperContainer}>
            <Text style={styles.upperText}>
              {name} - {clan} - {generation}ème Génération
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <Image
              source={{ uri: characterPic }}
              style={styles.roundProfilePicture}
            />
          </View>

          <Attributes
            attr_phy={attr_phy}
            attr_phy_bonus={attr_phy_bonus}
            attr_men={attr_men}
            attr_men_bonus={attr_men_bonus}
            attr_soc={attr_soc}
            attr_soc_bonus={attr_soc_bonus}
          />

          {/* Trying some circles here in the skills section of the homepage */}
          <View style={styles.container}>
            <View style={styles.item}>
              <Text style={styles.skillText}>Commandement</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Empathie</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Expression</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Intimidation</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Subterfuge</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Vigilance</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Droit</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
            </View>
            <View style={styles.middleItem}>
              <Text style={styles.skillText}>Commerce</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Equitation</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Etiquette</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Melee</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Survie</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Tir à l'arc</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.skillText}>Erudtion</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Investigation</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Occultisme</Text>
              <View style={styles.skills}>
                <Dot />
              </View>
              <Text style={styles.skillText}>Politique</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Sénéchale</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Sagesse Populaire</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
              </View>
              <Text style={styles.skillText}>Théologie</Text>
              <View style={styles.skills}>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </View>
            </View>
          </View>

          <Disciplines disciplines={disciplines} />

          {/* End of test */}

          <View style={styles.buttonGroup}>
            <Button
              buttonStyle={{ backgroundColor: "#bb0a1e", margin: 10 }}
              title="Historique"
              onPress={this.handleBackstory}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
