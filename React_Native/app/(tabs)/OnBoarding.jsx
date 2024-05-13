import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Login from "../Screens/Login";
import { Link } from "expo-router";
import styles from "../../components/Designs";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function OnBoarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#ffffff", "#DEF4F0"]}
        style={styles.background}
      />
      <StatusBar backgroundColor="blue" />
      <View style={styles.VeloxDiv}>
        <Text style={styles.VeloxText}>Velox</Text>
      </View>
      <View style={styles.TagDiv}>
        <Text style={styles.TagText}>Health in your hands.</Text>
        <Text style={styles.TagText}> in the wink of an eye.</Text>
      </View>
      <Image
        style={styles.Image}
        source={require("./../../assets/images/heart_card.png")}
      />

      <TouchableOpacity
        style={styles.getStartBtn}
        onPress={() => {
          navigation.navigate("Login");
          console.log("clicked");
        }}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
      {/* </LinearGradient> */}
    </SafeAreaView>
  );
}
