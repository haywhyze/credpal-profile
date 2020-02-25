import React from "react";
import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
import Button from "react-native-button";
import Icon from "react-native-vector-icons/Entypo";

const TopBar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Text style={styles.text}>
          <Icon color="red" name="chevron-thin-left" size={16} />
          <Text style={styles.discard}>Discard</Text>
        </Text>
      </TouchableOpacity>

      <Button
        style={styles.buttnStyles}
        containerStyle={styles.buttonContainer}
        onPress={() => Alert.alert("Saved")}
      >
        Save
      </Button>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 16
  },
  text: {
    color: "#555"
  },
  buttnStyles: { fontSize: 16, color: "#274fed" },
  buttonContainer: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "#eaeefd",
    borderWidth: 1
  },
  discard: {
    color: "red"
  }
});
