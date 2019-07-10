import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  Alert
} from "react-native";

import AnimatedLoader from "react-native-animated-loader";

import { Button, Card, Icon } from "react-native-elements";

// -- Navigation --
import { routes } from "../../shared/AppNavigator/routes";

// -- Axios Requests --
import axios from "axios";

// -- Styling --
import styles from "./style";
import animations from "../../theme/loaders";

const { width } = Dimensions.get("window");

export default class Homepage extends Component {
  state = {
    profileData: {
      bgPicture: "../../assets/images/default_profile.png",
      profilePicture: "../../assets/images/default_profile.png",
      name: ""
    },
    sheetData: {
      characterPic: "../../assets/images/default_profile.png",
      generation: "",
      name: "",
      clan: "",
      backstory: ""
    },
    isLoading: true
  };

  handleCharacterCreationNavigation = () => {
    Alert.alert("La création de personnage n'est pas encore disponible.");
    // this.props.navigation.navigate(
    //   routes.CharacterSheet,
    // );
  };

  getProfile() {
    const url =
      "https://api.backendless.com/E55416DD-FE03-C5B2-FFAD-8D09FF26CB00/C9173F67-095A-499D-FF0B-5CD4E3402700/data/profile/C49700C7-DA3C-97E5-FF29-F24890966C00?loadRelations=characters.disciplines";
    axios.get(url).then(result => {
      this.setState({
        sheetData: result.data.characters[0],
        profileData: result.data,
        characters: result.data.characters
      });
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
    });
  }

  componentDidMount() {
    this.getProfile();
  }

  render() {
    const { characterPic, generation, name, clan } = this.state.sheetData;
    const { profilePicture } = this.state.profileData;
    const { isLoading } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <AnimatedLoader
          visible={isLoading}
          overlayColor="rgba(0,0,0,1)"
          animationStyle={styles.lottie}
          speed={1}
          animationType={"fade"}
          source={animations.defaultLoader}
        />
        <ScrollView style={styles.screenStyle}>
          {this.state.isLoading && <View />}
          {!this.state.isLoading && (
            <ImageBackground
              source={{ uri: this.state.profileData.bgPicture }}
              style={styles.bgPicture}
            >
              <Text style={styles.upperText}>
                {this.state.profileData.name}
              </Text>
            </ImageBackground>
          )}
          {!this.state.isLoading && (
            <View style={styles.profilePictureContainer}>
              <Image
                source={{ uri: profilePicture }}
                style={styles.roundProfilePicture}
              />
            </View>
          )}
          {!this.state.isLoading && (
            <View style={styles.mainContainer}>
              {this.state.characters.map((u, i) => {
                let backstorySnip = u.backstory.substring(0, 97) + "...";
                return (
                  <Card
                    key={i}
                    title={u.name}
                    containerStyle={styles.cardContainer}
                    titleStyle={styles.cardTitleText}
                  >
                    <View style={styles.cardUpperContainer}>
                      <Image
                        source={{ uri: u.characterPic }}
                        style={styles.roundCardPicture}
                      />
                      <View style={styles.leftTextCardUpperContainer}>
                        <Text style={styles.leftCardUpperText}>
                          Ancien {u.clan}
                        </Text>
                        <Text style={styles.leftCardUpperText}>
                          {u.generation}ème Génération
                        </Text>
                      </View>
                    </View>
                    <Text style={styles.backgroundSnipText}>
                      {backstorySnip}
                    </Text>
                    <Button
                      icon={
                        <Icon
                          type="material"
                          name="accessibility"
                          color="#ffffff"
                        />
                      }
                      backgroundColor="#bb0a1e"
                      buttonStyle={styles.cardButton}
                      title="Fiche du personnage"
                      onPress={this.handleCharacterCreationNavigation}
                    />
                  </Card>
                );
              })}
              <Button
                buttonStyle={{ backgroundColor: "#bb0a1e", margin: 10 }}
                title="Créer un nouveau personnage"
                onPress={this.handleCharacterCreationNavigation}
              />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}
