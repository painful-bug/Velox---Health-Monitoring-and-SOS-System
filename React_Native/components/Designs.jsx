import { StyleSheet } from "react-native";
import Colors from "./../components/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "orange",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  VeloxDiv: {
    width: 200,
    height: 80,
    marginTop: 30,
  },
  VeloxText: {
    // fontFamily: "Kaushan Script",
    fontWeight: "bold",
    fontSize: 60,
    textAlign: "center",

    color: Colors.black,
  },
  //   Onboarding Page
  TagDiv: {
    width: 350,
    height: 100,
    marginTop: 60,
    marginBottom: 30,
  },
  TagText: {
    // fontFamily: "Kaisei Tokumin",
    // fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  Image: {
    width: 350,
    height: 250,
    borderRadius: 15,
    margin: 40,
  },
  getStartBtn: {
    padding: 15,
    backgroundColor: Colors.green,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 79,
    width: 330,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 23,
    color: Colors.primary,
  },

  // login Page
  loginTextVid: {
    marginTop: 85,
    width: 100,
    height: 85,
  },
  loginText: {
    fontSize: 40,
    textAlign: "center",
  },
  loginDiv: {
    display: "flex",
    backgroundColor: "transparent",
    height: 450,
    width: 370,
    borderColor: Colors.black,
    borderWidth: 2,
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 25,
    marginTop: 20,
  },
  btn: {
    backgroundColor: Colors.primary,
    height: 80,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  facebookBtn: {
    backgroundColor: "#1877f2",
  },
  btnText: {
    color: "#000",
    fontSize: 20,
    // fontFamily: "mon-b",
  },
  btnIcon: {
    position: "absolute",
    left: 13,
    color: "teal",
  },
  facebookIcon: {
    color: "#fff",
  },

  // Gender Page
  genderImg: {
    height: 300,
    width: 200,
  },
  genderBtn: {
    // position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
  },
});





