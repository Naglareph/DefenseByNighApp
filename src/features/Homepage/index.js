import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Alert
} from "react-native";

import AnimatedLoader from "react-native-animated-loader";

import { Button } from "react-native-elements";

//-- Components --
import CharacterCard from "../CharacterCard";

// -- Navigation --
import { routes } from "../../shared/AppNavigator/routes";

// -- Axios Requests --
import axios from "axios";

// -- Redux --
import { connect } from "react-redux";
import { getProfile } from "./actions";

// -- Styling --
import styles from "./style";
import animations from "../../theme/loaders";

export class Homepage extends Component {
  constructor(props) {
    super(props);
    this.props.profile = {
      characters: []
    };
  }

  componentDidMount() {
    this.props.getProfile();
  }

  handleCharacterCreationNavigation = () => {
    Alert.alert("La création de personnage n'est pas encore disponible.");
    // this.props.navigation.navigate(
    //   routes.CharacterCreation,
    // );
  };

  render() {
    const {
      isLoading,
      bgPicture,
      name,
      profilePicture,
      characters
    } = this.props.profiles;

    return (
      <View style={{ flex: 1 }}>
        <AnimatedLoader
          visible={isLoading}
          overlayColor="rgba(0,0,0,1)"
          animationStyle={styles.lottie}
          speed={1}
          animationType={"fade"}
          source={require("../../../assets/animations/defaultLoader.json")}
        />
        <ScrollView style={styles.screenStyle}>
          {isLoading && <View />}
          {!isLoading && (
            <ImageBackground
              source={{ uri: bgPicture }}
              style={styles.bgPicture}
            >
              <Text style={styles.upperText}>{name}</Text>
            </ImageBackground>
          )}
          {!isLoading && (
            <View style={styles.profilePictureContainer}>
              <Image
                source={{ uri: profilePicture }}
                style={styles.roundProfilePicture}
              />
            </View>
          )}
          {!isLoading && characters && (
            <View style={styles.mainContainer}>
              {characters.map((u, i) => {
                let backstorySnip = u.backstory.substring(0, 97) + "...";
                return (
                  <CharacterCard
                    key={i}
                    name={u.name}
                    characterPic={u.characterPic}
                    clan={u.clan}
                    generation={u.generation}
                    backstorySnip={backstorySnip}
                  />
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

const mapStateToProps = state => ({
  profiles: state.homepageReducers.data
});

const mapDispatchToProps = dispatch => ({
  getProfile: () => {
    dispatch(getProfile());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
