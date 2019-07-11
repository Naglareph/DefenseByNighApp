import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  globalContainer: {
    flex: 1
  },
  bgPicture: {
    width: width,
    height: 200,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    zIndex: 0
  },
  profilePictureContainer: {
    flexGrow: 1,
    backgroundColor: "black",
    alignItems: "center"
  },
  mainContainer: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "black",
    marginTop: 60
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
    alignContent: "center",
    alignItems: "center",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5
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
  screenStyle: {
    backgroundColor: "black"
  },
  lottie: {
    width: 100,
    height: 100
  },
  characterCreationButton: {
    backgroundColor: "#bb0a1e",
    margin: 10
  }
});
