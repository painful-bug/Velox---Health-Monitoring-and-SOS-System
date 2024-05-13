import { View, Text } from 'react-native'
import React from 'react'
import styles from "../../components/Designs";
import { StatusBar } from 'react-native';


const Index = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={{ margin: 100, fontSize: 50 }}>Index</Text>
    </View>
  );
}

export default Index