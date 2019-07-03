import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { Button } from "react-native-elements";
import { routes } from "../../shared/AppNavigator/routes";

// -- Axios Requests --
import axios from "axios";

// Access control
import AccessControl from "../../shared/AccessControl";
import { rights } from "../../shared/AccessControl/rights";

// Components
import Dot from "../../shared/Dot";
import Attributes from "../Attributes";

const { width } = Dimensions.get("window");

// here is a sample of what persmissions look like
const userPermissions = [rights.CONTROL_AIP, rights.CONTROL_BACKSTORY];

type Props = {};
export default class Homepage extends Component<Props> {
  state = {
    sheetData: {
      profile_pic: "../../assets/images/default_profile.png",
      generation: "",
      name: "",
      clan: "",
      isLoading: true
    }
  };
  handleBackstory = () => {
    this.props.navigation.navigate(
      routes.Backstory,
      this.state.sheetData.backstory
    );
  };

  getProfile() {
    const url =
      "https://api.backendless.com/E55416DD-FE03-C5B2-FFAD-8D09FF26CB00/C9173F67-095A-499D-FF0B-5CD4E3402700/data/characters/46EABB23-59FC-390E-FFF5-F2C6EA605E00";
    axios.get(url).then(result => {
      this.setState({ sheetData: result.data, isLoading: false });
    });
  }

  componentDidMount() {
    this.getProfile();
  }

  render() {
    const {
      profile_pic,
      generation,
      name,
      clan,
      attr_men,
      attr_men_bonus,
      attr_phy,
      attr_phy_bonus,
      attr_soc,
      attr_soc_bonus
    } = this.state.sheetData;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.screenStyle}>
          {this.state.isLoading && <View />}
          {!this.state.isLoading && (
            <View style={styles.upperContainer}>
              <Text style={styles.upperText}>
                {name} - {clan} - {generation}ème Génération
              </Text>
            </View>
          )}
          <View style={styles.mainContainer}>
            <Image
              source={{ uri: profile_pic }}
              style={styles.roundProfilePicture}
            />
          </View>

          {/* Here we load all the attributes of the character and display the dots accordingly */}
          {!this.state.isLoading && (
            <Attributes
              attr_phy={attr_phy}
              attr_phy_bonus={attr_phy_bonus}
              attr_men={attr_men}
              attr_men_bonus={attr_men_bonus}
              attr_soc={attr_soc}
              attr_soc_bonus={attr_soc_bonus}
            />
          )}

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

          {/* End of test */}

          <View
            style={{
              alignContent: "flex-start",
              justifyContent: "flex-start",
              backgroundColor: "black"
            }}
          >
            <Button
              buttonStyle={{ backgroundColor: "#bb0a1e", margin: 10 }}
              title="Actions Inter Parties"
              onPress={this.handleBackstory}
            />
            <Button
              buttonStyle={{ backgroundColor: "#bb0a1e", margin: 10 }}
              title="Historique"
              onPress={this.handleBackstory}
            />
            <AccessControl
              userPermissions={userPermissions}
              allowedPermissions={[rights.CONTROL_ORGA]}
              renderNoAccess={() => null}
            >
              <Button
                buttonStyle={{ backgroundColor: "#bb0a1e", margin: 10 }}
                title="Interface Organisateur"
                onPress={this.handleBackstory}
              />
            </AccessControl>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  upperContainer: {
    height: 200,
    backgroundColor: "grey",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
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
    borderRadius: width / 2,
    zIndex: 5
  },
  upperText: {
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    backgroundColor: "black"
  },
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
    fontSize: 12
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
  screenStyle: {
    backgroundColor: "black"
  }
});
