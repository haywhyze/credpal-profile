import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Complete profile</Text>
      <Text style={styles.subtitle}>
        Tell us even more about yourself and ensure that all details provided
        herein are valid and up to date.
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingBottom: 16
  },
  heading: {
    color: "#274fed",
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 16,
    paddingBottom: 8
  },
  subtitle: {
    paddingTop: 8,
    paddingBottom: 16
  }
});
