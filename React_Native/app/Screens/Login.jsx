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
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
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
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.loginDiv}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            console.log("login with google");
          }}
        >
          <Ionicons name="logo-google" size={40} style={styles.btnIcon} />
          <Text style={styles.btnText}>Contitnue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.facebookBtn]}
          onPress={() => {
            console.log("login with facebook");
          }}
        >
          <Ionicons name="logo-facebook" size={40} style={[styles.btnIcon, styles.facebookIcon]} />
          <Text style={styles.btnText}>Contitnue with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
