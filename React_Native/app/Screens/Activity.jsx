import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import styles from "../../components/Designs";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";

export default function Activity({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#DEF4F0", "#ffffff"]}
        style={styles.background}
      />
      <StatusBar barStyle="dark-content" />
      <View style={styles.buildProf}>
        <Text style={styles.buildProfText}>Let's build your profile</Text>
      </View>
      <View style={styles.additionalDiv}>
        <Text style={styles.additionalBox}>
          This additional info will help VELOX give you a more personalized
          experience.
        </Text>
      </View>
      <Text style={styles.ageText}>How Active are You?</Text>

      <View style={[styles.loginDiv, styles.activityBtnDiv]}>
        <TouchableOpacity
          style={[styles.btn, styles.activityBtn]}
          onPress={() => {
            console.log("Sedentary");
          }}
        >
          <Text style={styles.ActivitybtnText}>Sedentary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.activityBtn]}
          onPress={() => {
            console.log("Lightly Active");
          }}
        >
          <Text style={styles.ActivitybtnText}>Lightly Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.activityBtn]}
          onPress={() => {
            console.log("Moderately Active");
          }}
        >
          <Text style={styles.ActivitybtnText}>Moderately Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.activityBtn]}
          onPress={() => {
            console.log("Active");
          }}
        >
          <Text style={styles.ActivitybtnText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, styles.activityBtn]}
          onPress={() => {
            console.log("Very Active");
          }}
        >
          <Text style={styles.ActivitybtnText}>Very Active</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            navigation.navigate("Index");

            console.log("clicked");
          }}
        >
          <Text style={styles.getStartbtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
