import { StyleSheet } from "react-native";
import Colors from "./../components/Colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
    marginTop: 80,
    
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
    paddingHorizontal: 20,
    backgroundColor: Colors.green,
    marginTop: 50,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 280,
    height: 80,
    elevation: 4,
  },
  getStartbtnText: {
    fontSize: 28,
    color: "#ffffff",
  },

  // login Page
  loginTextVid: {
    marginTop: 30,
    padding: 10,
  },
  loginText: {
    fontSize: 36,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginDiv1: {
    height: 200,
    width: 390,
  },
  inputField: {
    height: 60,
    // width: 400,
    borderWidth: 1,
    borderColor: "#ABABAB",
    borderRadius: 8,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#fff",
  },
  continueBtn: {
    backgroundColor: "teal",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  seperatorView: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginVertical: 30,
  },
  seperator: {
    color: Colors.grey,
    fontSize: 16,
  },
  loginDiv2: {
    display: "flex",
    backgroundColor: "transparent",
    height: 240,
    width: 390,
    borderColor: Colors.black,
    // borderWidth: 2,
    borderRadius: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 25,
    marginTop: 10,
  },
  btn: {
    backgroundColor: Colors.primary,
    height: 80,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  facebookBtn: {
    backgroundColor: "#1877f2",
  },
  btnText: {
    color: "#000",
    fontSize: 22,
    marginLeft: 30,
    // fontFamily: "mon-b",
  },
  facebookBtnText: {
    color: "#fff",
    fontSize: 21,
    marginLeft: 40,
  },
  btnIcon: {
    position: "absolute",
    left: 15,
    height: 40,
    width: 40,
  },
  facebookIcon: {
    height: 40,
    width: 40,
    color: "#fff",
    position: "absolute",
    left: 13,
  },

  // Gender Page
  buildProf: {
    marginTop: 90,
    padding: 10,
    marginBottom: 12,
  },
  buildProfText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  additionalDiv: {
    paddingHorizontal: 40,
  },
  additionalBox: {
    fontSize: 20,
    textAlign: "center",
  },
  genderLine: {
    fontSize: 35,
    marginTop: 90,
  },
  genderImg: {
    height: 260,
    width: 160,
    margin: 30,
    resizeMode: "stretch",
  },
  genderImgf: {
    height: 248,
  },
  nextBtn: {
    paddingHorizontal: 20,
    backgroundColor: Colors.green,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 250,
    height: 80,
    elevation: 4,
  },

  // Activity Page
  ageText: {
    fontSize: 35,
    marginTop: 50,
  },
  activityBtnDiv: {
    marginTop: 0,
    alignItems: "stretch",
    height: 450,
    width: 400,
    borderColor: "transparent",
  },
  activityBtn: {
    backgroundColor: "transparent",
    height: 60,
    borderWidth: 1.5,
    borderRadius: 20,
    marginTop: 0,
    elevation: 0,
    marginTop: 20,
  },
  ActivitybtnText: {
    fontSize: 30,
  },
  errorText: {
    color: "red",
    marginBottom: 5,
    fontSize: 16,
  },
});


