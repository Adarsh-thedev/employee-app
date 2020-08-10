import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f5f0",
  },
});

export default App;
