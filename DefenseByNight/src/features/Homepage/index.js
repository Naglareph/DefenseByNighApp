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

import Images from "../../theme/Images";

// Access control
import AccessControl from "../../shared/AccessControl";
import { rights } from "../../shared/AccessControl/rights";

// a fixture for the character data
import { Sheet } from "../../fixtures/characterSheetData";

const { width, height } = Dimensions.get("window");

// here is a sample of what persmissions look like
const userPermissions = [
  rights.CONTROL_ORGA,
  rights.CONTROL_AIP,
  rights.CONTROL_BACKSTORY
];

type Props = {};
export default class Homepage extends Component<Props> {
  handleBackstory = () => {
    this.props.navigation.navigate(routes.Backstory);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.screenStyle}>
          <View style={styles.upperContainer}>
            <Text style={styles.upperText}>
              {Sheet.name} - {Sheet.clan} - {Sheet.generation}ème Génération
            </Text>
          </View>
          <View style={styles.mainContainer}>
            <Image
              source={Images.profileImage}
              style={styles.roundProfilePicture}
            />
          </View>

          {/* Trying som stuff for the attributes */}
          <View style={styles.attributeContainer}>
            <View style={styles.item}>
              <Text style={styles.attributeText}>Physique</Text>
              <View style={styles.attribute}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <Text> </Text>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.attributeText}>Social</Text>
              <View style={styles.attribute}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <Text> </Text>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.attributeText}>Mental</Text>
              <View style={styles.attribute}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <Text> </Text>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.attributeText}>Bonus</Text>
              <View style={styles.attribute}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
            </View>
          </View>

          {/* Trying some circles here in the skills section of the homepage */}

          <View style={styles.container}>
            <View style={styles.item}>
              <Text style={styles.skillText}>Commandement</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Empathie</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Expression</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Intimidation</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Subterfuge</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Vigilance</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Droit</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
            </View>
            <View style={styles.middleItem}>
              <Text style={styles.skillText}>Commerce</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Equitation</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Etiquette</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Melee</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Survie</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Tir à l'arc</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
            </View>
            <View style={styles.item}>
              <Text style={styles.skillText}>Erudtion</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Investigation</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Occultisme</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Politique</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Sénéchale</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Sagesse Populaire</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
              </View>
              <Text style={styles.skillText}>Théologie</Text>
              <View style={styles.skills}>
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
                <View style={styles.circleShapeView} />
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
              allowedPermissions={["control:orga"]}
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
  circleShapeView: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: "#bb0a1e"
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
