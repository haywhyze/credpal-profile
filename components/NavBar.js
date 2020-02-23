import React from "react";
import { StyleSheet, View } from "react-native";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}></View>
      <View style={styles.bar}></View>
      <View style={styles.bar}></View>
      <View style={styles.bar}></View>
      <View style={styles.bar}></View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  bar: {
    width: "18%",
    height: 4,
    borderRadius: 5,
    backgroundColor: "#274fed"
  }
});
