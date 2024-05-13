import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Colors from "./../../components/Colors";
import OnBoarding from "./OnBoarding";
import Gender from "../Screens/Gender";
import Activity from "../Screens/Activity";
import Index from "./Index";
import LoginPage from "../Screens/LoginPage";

const Stack = createNativeStackNavigator();

export const Layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Index"
        component={Index}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Layout />
    </NavigationContainer>
  );
}
