import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
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
  roundCardPicture: {
    height: width / 3 - 40,
    width: width / 3 - 40,
    borderRadius: width / 2 - 20,
    overflow: "hidden",
    margin: width / 20 - 10
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
  cardContainer: {
    borderRadius: 10,
    marginLeft: 32,
    marginRight: 32,
    backgroundColor: "#8a8988"
  },
  cardUpperContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  leftTextCardUpperContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: width / 10
  },
  leftCardUpperText: {
    fontWeight: "bold",
    fontFamily: ""
  },
  cardButton: {
    backgroundColor: "#bb0a1e",
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  backgroundSnipText: {
    marginBottom: 10,
    padding: 16,
    fontStyle: "italic"
  },
  cardTitleText: {
    fontFamily: "Zocial"
  }
});
