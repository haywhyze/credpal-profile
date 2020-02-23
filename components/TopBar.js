import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon="angle-left" />
      <Text style={styles.text}>Step 1 of 5</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    color: "#555"
  }
});