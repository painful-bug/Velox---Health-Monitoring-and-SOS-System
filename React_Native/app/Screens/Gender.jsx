import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./../../components/Designs";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Gender() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#DEF4F0", "#ffffff"]}
        style={styles.background}
      />
      <StatusBar backgroundColor="blue" />
      <View style={styles.VeloxDiv}>
        <Text style={styles.VeloxText}>Velox</Text>
      </View>
      <View style={styles.loginTextVid}>
        <Text style={styles.loginText}>Gender</Text>
      </View>
      <View style={{flex:1, flexDirection:"row"}}>
        <TouchableOpacity
          style={styles.genderBtn}
          onPress={() => {
            console.log("clicked");
          }}
        >
          {/* <Image
            style={styles.genderImg}
            source={require("./../../assets/images/male.png")}
          /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genderBtn}
          onPress={() => {
            console.log("clicked");
          }}
        >
          {/* <Image
            style={styles.genderImg}
            source={require("./../../assets/images/female.png")}
          /> */}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
