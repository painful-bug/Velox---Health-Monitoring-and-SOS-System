import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  Alert
} from "react-native";
import React from "react";
import styles from "../../components/Designs";
import { StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";



export default function LoginPage({ navigation }) {
  const [phnumber, setPhnumber] = useState("");
  const [errors, setErrors] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    setPhnumber("");
    
  };

  const validateForm = () => {
    let errors = {};
    if (phnumber.length < 10)
      errors.phnumber = "Invalid Phone Number";
    if (phnumber.length >10) errors.phnumber = "Invalid Phone Number";
    if (!phnumber) errors.phnumber = "Phone Number is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

      const handleSubmit = () => {
        if (validateForm()) {
          console.log("Submitted", phnumber);
          setPhnumber("");
          setErrors({});
          Alert.alert("You are successfully logged in.", "Welcome♥", [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("Gender");
                console.log("OK Pressed");
              },
            },
          ]);
          

        }
      };

  return (
    <SafeAreaView style={styles.container}>
      
        <LinearGradient
          colors={["#DEF4F0", "#ffffff"]}
          style={styles.background}
        />
        <StatusBar barStyle="dark-content" />
        <View style={styles.VeloxDiv}>
          <Text style={styles.VeloxText}>Velox</Text>
        </View>
        <View style={styles.loginTextVid}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={[styles.loginDiv2, styles.loginDiv1]}>
          <TextInput
            keyboardType="numeric"
            placeholder="Phone Number"
            style={[styles.inputField, { marginBottom: 30 }]}
            value={phnumber}
            onChangeText={setPhnumber}
          />
          {errors.phnumber ? (
            <Text style={styles.errorText}>*{errors.phnumber}</Text>
          ) : null}
          <TouchableOpacity style={styles.continueBtn} onPress={handleSubmit}>
            <Text
              style={[
                styles.btnText,
                { marginLeft: 0, fontSize: 24, color: "#fff" },
              ]}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperatorView}>
          <View
            style={{
              flex: 1,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <Text style={styles.seperator}>or</Text>
          <View
            style={{
              flex: 1,
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
        </View>
        <View style={styles.loginDiv2}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              console.log("login with google");
              
            }}
          >
            <Image
              source={require("./../../assets/images/google.png")}
              style={styles.btnIcon}
            ></Image>
            <Text style={styles.btnText}>Contitnue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.facebookBtn]}
            onPress={() => {
              console.log("login with facebook");
              
            }}
          >
            <Ionicons
              name="logo-facebook"
              size={40}
              style={[styles.facebookIcon]}
            />
            <Text style={styles.facebookBtnText}>Contitnue with Facebook</Text>
          </TouchableOpacity>
        </View>
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      
    </SafeAreaView>
  );
}
