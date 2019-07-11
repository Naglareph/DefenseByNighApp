import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
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
  },
  lottie: {
    width: 100,
    height: 100
  },
  buttonGroup: {
    alignContent: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "black"
  }
});
