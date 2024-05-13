import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./../../components/Designs";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";

export default function Gender({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#DEF4F0", "#ffffff"]}
        style={styles.background}
      />
      <StatusBar barStyle="dark-content" />
      <View style={styles.buildProf}>
        <Text style={styles.buildProfText}>Let's build your profile!!</Text>
      </View>
      <View style={styles.additionalDiv}>
        <Text style={styles.additionalBox}>
          This additional info will help VELOX give you a more personalized
          experience.
        </Text>
      </View>
      <View style={{}}>
        <Text style={[styles.genderLine]}>What is your Gender?</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
          marginBottom: 50,
        }}
      >
        <TouchableOpacity
          style={styles.genderBtn}
          onPress={() => {
            console.log("male");
          }}
        >
          <Image
            style={styles.genderImg}
            source={require("./../../assets/images/male.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genderBtn}
          onPress={() => {
            console.log("female");
          }}
        >
          <Image
            style={[styles.genderImg, styles.genderImgf]}
            source={require("./../../assets/images/female.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ display: "flex" }}>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate("Activity");

            console.log("clicked");
          }}
        >
          <Text style={styles.getStartbtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
