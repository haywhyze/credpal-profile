import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Button />
      <View style={styles.textContainer}>
        <FontAwesomeIcon size={14} color="#888" icon="lock" />
        <Text style={styles.text} >Your data is secure.</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: "60%",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  text: {
    color: "#888",
    marginLeft: 5,
    fontSize: 12,
  }
});
