import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "./OnBoarding";
import Login from "./../Screens/Login";

const Stack = createNativeStackNavigator();

export const Layout = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={OnBoarding}
          options={{
            
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          initialParams={{ name: "Guest" }}
          //options={({route})=>({title:route.params.name,})}
        />
      </Stack.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
        <Layout/>
    </NavigationContainer>
  );
}

